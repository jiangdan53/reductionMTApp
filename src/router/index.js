import Vue from 'vue'
import Router from 'vue-router'
import Defaults from '@/layout/default.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Defaults',
      component: Defaults,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/views/index.vue')
        },
        {
          path: 'chengecity',
          name: 'chengecity',
          component: () => import('@/views/chengecity.vue')
        },
        {
          path:'s/:name',
          name:'commodity',
          component:() => import('@/views/commodityList.vue')
        }

      ]
    },
    {
      path: 'login',
      name: 'login',
      component: () => import('@/layout/login.vue')
    },
    {
      path: 'regiter',
      name: 'regiter',
      component: () => import('@/layout/regiter.vue')
    }
  ]
})
