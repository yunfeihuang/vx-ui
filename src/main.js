// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
require('es6-promise').polyfill()
if (HTMLElement && !HTMLElement.prototype.remove) {
  HTMLElement.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this)
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
