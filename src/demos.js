import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../packages/style/src/theme/index.scss'
import Vx from '../packages'
// import 'vx-ui/lib/style/theme/index.css'
// import Vx from 'vx-ui/lib/index.js'

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

createApp(App).use(Vx).use(router).mount('#app')
