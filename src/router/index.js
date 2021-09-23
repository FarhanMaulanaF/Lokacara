import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/dashboard.vue'
import EventList from '../views/event-list.vue'
import Information from '../views/information.vue'
import Detail from '../views/detail.vue'
import Ticket from '../views/ticket.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashbard',
      component: Dashboard
    },
    {
      path: '/event-list',
      name: 'eventlist',
      component: EventList
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    },
  ]
})