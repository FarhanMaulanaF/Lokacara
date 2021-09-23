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
      },
      {
        path: '/event-list',
        name: 'EventList',
        component: () => import('../views/eventlist.vue')
      },
      {
        path: '/create-1',
        name: 'create-1',
        component: () => import('../views/create_event/create-1.vue')
      },
      {
        path: '/create-2',
        name: 'create-2',
        component: () => import('../views/create_event/create-2.vue')
      },
      {
        path: '/create-3',
        name: 'create-3',
        component: () => import('../views/create_event/create-3.vue')
      },
    ]
  })

