let isInIframe = window.top !== window
let timer = isInIframe ? 0 : 320
const parent = {
  methods: {
    pageLoad (vue) {
      requestAnimationFrame(() => {
        vue.$el.style.opacity = '1'
        vue.$el.style.willChange = 'transform'
        vue.$el.style.transform = 'translate3d(0, 0, 0)'
        vue.$el.style.transition = isInIframe ? 'none' : ''
        this.$el.style.pointerEvents = 'none'
        setTimeout(() => {
          requestAnimationFrame(() => {
            this.$el.style.pointerEvents = ''
            vue.$el.style.willChange = ''
            vue.pageState.into = true
            if (vue.$options.$mounted) {
              if (vue.$options.$mounted.forEach) {
                vue.$options.$mounted.forEach(item => {
                  item.call(vue)
                })
              } else {
                vue.$options.$mounted.call(vue)
              }
            }
          })
        }, timer)
      })
    }
  }
}
const children = {
  beforeMount () {
    this.$nextTick(() => {
      requestAnimationFrame(() => {
        this.$parent.pageLoad(this)
      })
    })
  },
  data () {
    return {
      pageState: {into: false}
    }
  },
  beforeRouteLeave (to, from, next) {
    requestAnimationFrame(() => {
      this.$parent.$el.style.pointerEvents = 'none'
      this.$el.style.transform = 'translate3d(100%, 0, 0)'
      this.$el.style.willChange = 'transform'
      this.$el.style.transition = isInIframe ? 'none' : ''
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.$parent.$el.style.pointerEvents = ''
          next()
        })
      }, timer)
    })
  }
}

export {
  parent,
  children
}
