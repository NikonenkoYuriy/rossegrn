import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
//  {
//    path: '/about',
//    name: 'About',
//    // route level code-splitting
//    // this generates a separate chunk (about.[hash].js) for this route
//    // which is lazy-loaded when the route is visited.
//    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//  },
  {
    path: '/price',
    name: 'PriceContent',
    component: () => import('../views/PriceContent.vue')
  },
  {
    path: '/questions',
    name: 'QuestionsContent',
    component: () => import('../views/QuestionsContent.vue')
  },
  {
    path: '/order-login',
    name: 'OrderLoginContent',
    component: () => import('../views/OrderLoginContent.vue')
  },
  {
    path: '/basket',
    name: 'BasketContent',
    component: () => import('../views/BasketContent.vue') 
  },
  {
    path: '/privacy',
    name: 'PrivacyContent',
    component: () => import('../views/PrivacyContent.vue')
  },
  {
    path: '/oferta',
    name: 'OfertaContent',
    component: () => import('../views/OfertaContent.vue')
  }
	  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
