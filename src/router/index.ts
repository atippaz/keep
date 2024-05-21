/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/home/*.vue`
 */

// Composables
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
export const routerMenu = {
  homePage: 'Index',
}
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home/index.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/SecondPageLatout.vue'),
    children: [
      {
        path: '/planing',
        name: 'Planing',
        component: () => import('@/pages/home/PlaningPage.vue'),
      },
      {
        path: '/investion',
        name: 'Investion',
        component: () => import('@/pages/home/PlaningPage.vue'),
      },
      {
        path: '/currency',
        name: 'Currency',
        component: () => import('@/pages/home/CurrencyPage.vue'),
      },
      {
        path: '/dca',
        name: 'Dca',
        component: () => import('@/pages/home/CurrencyPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

// router.beforeEach(async (to, from, next) => {})

export default router
