import Vue from 'vue'
import Router from 'vue-router'
import demosRoutes from './demos'
import cnodeRoutes from './cnode'

Vue.use(Router)

let routes = demosRoutes.concat(cnodeRoutes)

const router = new Router({
  // mode: 'history',
  routes: routes
})
let toast = null
router.beforeEach((to, from, next) => {
  toast && toast.$destroy()
  if (router.app.$toast) {
    toast = router.app.$toast({
      type: 'loading',
      content: '加载中',
      duration: 0,
      align: 'center'
    })
  }
  next()
})
router.afterEach((to, from) => {
  toast && toast.$destroy()
})
export default router
