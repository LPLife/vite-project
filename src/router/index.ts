import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/nft'),
  routes
});
export default router;
