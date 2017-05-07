import Vue from 'vue'
import Router from 'vue-router'
import demosRoutes from './demos'
import cnodeRoutes from './cnode'

Vue.use(Router)

let routes = demosRoutes.concat(cnodeRoutes)

export default new Router({
  // mode: 'history',
  routes: routes
})
