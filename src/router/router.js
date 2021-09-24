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
        name: 'Event-List',
        component: () => import('../views/event-list.vue')
      },
      {
        path: '/create',
        name: 'Create-Event',
        component: () => import('../views/createEvent/createEvent.vue')
      },
      {
        path: '/create/details',
        name: 'Details',
        component: () => import('../views/createEvent/createEvent_Details')
      },
      {
        path: '/create/ticket',
        name: 'Ticket',
        component: () => import('../views/createEvent/createEvent_Ticket')
      }

      
    ]
  })

