let isInIframe = window.top !== window
let timer = isInIframe ? 0 : 320
export default {
  data: function () {
    return {
      slideIn: false
    }
  },
  beforeRouteEnter: function (to, from, next) {
    next(function (vm) {
      let home = document.querySelector('.vx-page')
      requestAnimationFrame(() => {
        let node = vm.$el
        node.style.opacity = '1'
        node.style.willChange = 'transform'
        node.style.transform = 'translate3d(0, 0, 0)'
        node.style.transition = isInIframe ? 'none' : ''
        home.style.pointerEvents = 'none'
        setTimeout(() => {
          requestAnimationFrame(() => {
            home.style.pointerEvents = ''
            node.style.willChange = ''
            vm.slideIn = true
          })
        }, timer)
      })
    })
  },
  beforeRouteLeave: function (to, from, next) {
    let home = document.querySelector('.vx-page')
    requestAnimationFrame(() => {
      home.style.pointerEvents = 'none'
      this.$el.style.transform = 'translate3d(100%, 0, 0)'
      this.$el.style.willChange = 'transform'
      this.$el.style.transition = isInIframe ? 'none' : ''
      setTimeout(() => {
        requestAnimationFrame(() => {
          home.style.pointerEvents = ''
          next()
        })
      }, timer)
    })
  }
}
