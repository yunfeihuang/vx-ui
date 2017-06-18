// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
/*
let deviceWidth = window.innerWidth
let devicePixelRatio = window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio
let calc = 7.5
if (deviceWidth > 414) deviceWidth = 414
if (deviceWidth < 320) deviceWidth = 320
if (deviceWidth < 320 && devicePixelRatio >= 2) calc = calc - (devicePixelRatio - 1)
document.documentElement.style.fontSize = Math.ceil(deviceWidth / calc / 1.4) + 'px'// 计算设计稿和实际像素的缩放比。向上取整1px = 0.01rem
*/
