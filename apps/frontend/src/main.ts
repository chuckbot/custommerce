import { Router } from '@vaadin/router';
import './components/app-header.js';
import './views/home-view.js';
import './views/product-view.js';

const outlet = document.querySelector('#app');
const router = new Router(outlet);

router.setRoutes([
  { path: '/', component: 'home-view' },
  { path: '/product/:slug', component: 'product-view' },
]);