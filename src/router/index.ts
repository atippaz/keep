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
    component: () => import('@/layouts/defaultLayout.vue'),
    children: [{ path: '/', component: () => import('@/pages/index.vue') }],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

// router.beforeEach(async (to, from, next) => {})

export default router
