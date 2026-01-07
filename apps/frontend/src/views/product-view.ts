import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('product-view')
export class ProductView extends LitElement {
  render() {
    return html`<h1>Detalle del Producto</h1>`;
  }
}