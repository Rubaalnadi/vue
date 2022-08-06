import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import cart from '../views/ChartVue.vue'
import user from "../views/UserProfile.vue"
import hero from "../views/HeroPage.vue"
import details from "../views/ProductDetails.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hero-page',
      component: hero
    },
    {
      path: '/login',
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
      component: () => import('../views/ProductVue.vue'),
    },
    {
      path:'/product/:id',
      component:details,
      props:true// /product/1
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/user-prof',
      name: 'user-prof',
      component: user
    }
  ]
})

export default router
