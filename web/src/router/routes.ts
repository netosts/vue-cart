import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue')
      }
    ],
  },
  {
    path: '/cart',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'cart',
        component: () => import('pages/CartPage.vue')
      }
    ],
  },
  {
    path: '/shop/:id/:slug',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'shop',
        component: () => import('pages/shop/IndexPage.vue'),
      }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
