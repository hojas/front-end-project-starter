import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./pages/home/Home.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('./pages/NotFound.vue') },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
