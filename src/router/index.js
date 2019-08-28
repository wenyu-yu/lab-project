import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/submit',
      name: 'Submit',
      component: () => import('../views/Submit.vue')
    },
    {
      path: '/problem',
      name: 'Problem',
      component: () => import('../views/Problem.vue')
    },
    {
      path: '/manager',
      name: 'Manager',
      component: () => import('../views/Manager.vue')
    },
    {
      path: '/addperson',
      name: 'AddPerson',
      component: () => import('../views/AddPerson.vue')
    }
  ]
})
