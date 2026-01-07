import Fastify from 'fastify';
import cors from '@fastify/cors';
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as dotenv from 'dotenv';
import * as schema from './db/schema.js';
import { products } from './db/schema.js';

dotenv.config();

const fastify = Fastify({ 
  logger: true // Esto nos mostrará todos los logs de las peticiones en la consola de Docker
});

// 1. Configurar CORS (Vital para que tu Frontend en Lit pueda consultar la API)
await fastify.register(cors, {
  origin: true // En desarrollo permite cualquier origen; en producción lo limitaremos
});

// 2. Conexión a la Base de Datos
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle(pool, { schema });

// 3. Primer Endpoint: Obtener Catálogo
fastify.get('/api/products', async (request, reply) => {
  try {
    const allProducts = await db.select().from(products);
    return allProducts;
  } catch (error) {
    fastify.log.error(error);
    return reply.code(500).send({ error: 'Error al obtener productos' });
  }
});

// 4. Endpoint de Salud (Healtcheck)
fastify.get('/health', async () => {
  return { status: 'ok', service: 'custommerce-api' };
});

// 5. Encender el Servidor
const start = async () => {
  try {
    // Escuchamos en 0.0.0.0 para que sea accesible desde fuera del contenedor Docker
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('🚀 Custommerce API lista en http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();