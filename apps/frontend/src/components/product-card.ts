// apps/frontend/src/components/product-card.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { addToCart } from '../store.js'; // <-- Importante la extensión .js

@customElement('product-card')
export class ProductCard extends LitElement {
  @property({ type: Object }) product = { name: 'Producto Pro', price: 99 };

  render() {
    return html`
      <div>
        <h3>${this.product.name}</h3>
        <p>$${this.product.price}</p>
        <button @click=${() => addToCart(this.product)}>
          Añadir al carrito
        </button>
      </div>
    `;
  }
}