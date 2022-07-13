import { createRouter, createWebHistory } from 'vue-router';

import Product from '@/views/Product.vue';

const routes = [
  {
    path: "/",
    component: Product
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;