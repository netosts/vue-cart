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
    path: '/shop',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'shop',
        component: () => import('pages/shop/IndexPage.vue'),
        children: [
          {
            path: 'electronics',
            name: 'shop.electronics',
            component: () => import('pages/shop/electronics/IndexPage.vue'),
            alias: ['/:id', ''],
          },
          {
            path: 'clothing',
            name: 'shop.clothing',
            component: () => import('pages/shop/clothing/IndexPage.vue')
          },
          {
            path: 'housewares',
            name: 'shop.housewares',
            component: () => import('pages/shop/housewares/IndexPage.vue')
          },
        ],
      }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
