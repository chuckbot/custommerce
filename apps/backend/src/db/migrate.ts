import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import pg from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

async function runMigrations() {
  console.log('⏳ Aplicando migraciones en Custommerce...');
  try {
    // Esto buscará la carpeta 'drizzle' que generará drizzle-kit
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('✅ Base de datos sincronizada correctamente');
  } catch (error) {
    console.error('❌ Error al migrar:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigrations();