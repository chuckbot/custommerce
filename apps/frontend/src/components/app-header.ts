import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { SignalWatcher } from '../utils/watch.js';
import { cartCount } from '../store.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  // Conectamos el componente al sistema de Signals
  private _watcher = new SignalWatcher(this);

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      background: #f8f9fa;
      border-bottom: 2px solid #646cff;
    }
    .badge {
      background: #646cff;
      color: white;
      padding: 2px 8px;
      border-radius: 10px;
      font-weight: bold;
    }
  `;

  render() {
    const count = cartCount.value;
    return html`
      <header>
        <strong>Custommerce</strong>
        <nav>
          <span>🛒 Carrito: <span class="badge">${count}</span></span>
        </nav>
      </header>
    `;
  }
}