import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './styles/bootstrap.css'
import '../../packages/style/src/theme/index.scss'
import routes from './route.config.js'
import App from './App.vue'
import Vx from '../../packages'

createApp(App).use(Vx).use(createRouter({
  history: createWebHistory(),
  routes: routes
})).mount('#app')

let initRootFontSize = () => {
  let deviceWidth = window.innerWidth
  let devicePixelRatio = window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio
  let calc = 7.5
  if (deviceWidth > 414) deviceWidth = 414
  if (deviceWidth < 320) deviceWidth = 320
  if (deviceWidth < 320 && devicePixelRatio >= 2) calc = calc - (devicePixelRatio - 1)
  document.documentElement.style.fontSize = Math.ceil(deviceWidth / calc) + 'px'// 计算设计稿和实际像素的缩放比。向上取整1px = 0.01rem
}
window.addEventListener('resize', initRootFontSize)
initRootFontSize()
