import { signal, computed } from "@preact/signals-core";

// Definimos la interfaz para que TS sepa qué es un producto
export interface Product {
  id?: string;
  name: string;
  price: number;
  slug?: string;
}

// Le decimos que el signal es una lista de Product
export const cart = signal<Product[]>([]);

export const cartCount = computed(() => cart.value.length);

export const addToCart = (product: Product) => {
  cart.value = [...cart.value, product];
};