import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Material from '@/components/Material'
import addEmployee from '@/components/addEmployee'
import OrderPrice from '@/components/OrderPrice'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/material'
    },
    {
      path: '/material',
      name: 'Material',
      component: Material
    },
    {
      path: '/addEmployee',
      name: 'addEmployee',
      component: addEmployee
    },
    {
      path: '/orderPrice',
      name: 'OrderPrice',
      component: OrderPrice
    }
  ]
})
