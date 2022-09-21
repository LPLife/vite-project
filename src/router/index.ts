import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/demo.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/nft'),
  routes
});
export default router;
