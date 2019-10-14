// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './demos/components'
import './components/style/src/theme/index.scss'
import Components from 'components'
import page from '@/utils/mixins/page'

Vue.use(Components)

window.$import = function (promise, _modules) {
  return promise.then(res => {
    !res.default.mixins && (res.default.mixins = [])
    res.default.mixins.push(page)
    return res
  })
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
let initRootFontSize = function () {
  let deviceWidth = window.innerWidth
  let devicePixelRatio = window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio
  let calc = 7.5
  if (deviceWidth > 768) deviceWidth = 768
  if (deviceWidth < 320) deviceWidth = 320
  if (deviceWidth < 320 && devicePixelRatio >= 2) calc = calc - (devicePixelRatio - 1)
  let fontSize = Math.ceil(deviceWidth / calc)
  if (fontSize % 2 === 1) {
    fontSize--
  }
  document.documentElement.style.fontSize = fontSize + 'px'// 计算设计稿和实际像素的缩放比。向上取整1px = 0.01rem
}
window.addEventListener('resize', initRootFontSize)
initRootFontSize()
