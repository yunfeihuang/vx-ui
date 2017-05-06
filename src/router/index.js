import Vue from 'vue'
import Router from 'vue-router'
import demosRoutes from './demos'

Vue.use(Router)

let routes = demosRoutes

export default new Router({
  // mode: 'history',
  routes: routes
})
