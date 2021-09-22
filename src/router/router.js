import Vue from 'vue'
import Router from 'vue-router'
// import Register from '../components/Register.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/register.vue')
      },
      {
        path: '/',
        name: 'Login',
        component: () => import('../views/login.vue')
      },
      {
        path: '/forgot-password',
        name: 'Forgot',
        component: () => import('../views/forgot.vue')
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/dashboard.vue')
      }
      
    ]
  })

