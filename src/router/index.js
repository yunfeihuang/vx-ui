import Vue from 'vue'
import VueRouter from 'vue-router'
import demos from './demos'
import cnode from './cnode'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    ...demos,
    ...cnode
  ]
})
let toast = null
router.beforeEach((to, from, next) => {
  toast && toast.$destroy()
  if (router.app.$toast) {
    toast = router.app.$toast({
      type: 'loading',
      message: '加载中',
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
