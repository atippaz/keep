/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
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
    children: [{ path: '/', component: () => import('@/pages/index.vue') }],
  },
  {
    path: '/',
    component: () => import('@/layouts/SecondPageLatout.vue'),
    children: [
      {
        path: '/planing',
        component: () => import('@/pages/PlaningPage.vue'),
      },
      {
        path: '/investion',
        component: () => import('@/pages/PlaningPage.vue'),
      },
      {
        path: '/currency',
        component: () => import('@/pages/CurrencyPage.vue'),
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
