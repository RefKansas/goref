import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/schedule',
      name: 'schedule',
      // route level code-splitting
      // this generates a separate chunk (schedule.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "schedule" */ './views/Schedule.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/auth/Register.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/auth/SignIn.vue')
    } 
  ]
})
