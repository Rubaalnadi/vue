import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: HomeView
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductVue.vue')
    },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: () => import('../views/CartVue.vue')
    // }
  ]
})

export default router
