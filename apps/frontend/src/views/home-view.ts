import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/product-card.js';

@customElement('home-view')
export class HomeView extends LitElement {
  render() {
    return html`
      <main style="padding: 1rem;">
        <section class="grid">
          <product-card .product=${{name: 'Producto Pro', price: 99}}></product-card>
        </section>
      </main>
    `;
  }
}