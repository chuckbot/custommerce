import { ReactiveController, ReactiveControllerHost } from 'lit';
import { effect } from '@preact/signals-core';

export class SignalWatcher implements ReactiveController {
  private _dispose?: () => void;
  private host: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    this.host.addController(this);
  }

  hostConnected() {
    this._dispose = effect(() => {
      // Forzamos a Lit a que se entere de los cambios en los signals
      this.host.requestUpdate();
    });
  }

  hostDisconnected() {
    this._dispose?.();
  }
}