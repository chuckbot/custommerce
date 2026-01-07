import { pgTable, uuid, text, decimal, integer, timestamp, boolean } from 'drizzle-orm/pg-core';

// Tabla de Productos para el catálogo
export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  price: decimal('price', { precision: 12, scale: 2 }).notNull(),
  stock: integer('stock').notNull().default(0),
  imageUrl: text('image_url'),
  active: boolean('active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
});

// Tabla de Órdenes (Cabecera)
export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().defaultRandom(),
  totalAmount: decimal('total_amount', { precision: 12, scale: 2 }).notNull(),
  status: text('status').default('pending'), // pending, paid, shipped
  createdAt: timestamp('created_at').defaultNow(),
});