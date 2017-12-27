import Vue from 'vue'
import Router from 'vue-router'
import routes from './route.config.js'
import App from './App.vue'

Vue.use(Router)

new Vue({ // eslint-disable-line
  router: new Router({
    routes: routes
  }),
  el: '#app',
  render: h => h(App)
})
