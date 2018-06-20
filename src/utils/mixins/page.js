const parent = {
  methods: {
    handleLoad (vue) {
      requestAnimationFrame(() => {
        vue.$el.style.opacity = '1'
        vue.$el.style.transform = 'translate3d(0, 0, 0)'
        setTimeout(() => {
          requestAnimationFrame(() => {
            vue.transitionIn && vue.transitionIn()
          })
        }, 320)
      })
    }
  }
}
const children = {
  beforeMount () {
    this.$nextTick(() => {
      this.$parent.handleLoad(this)
    })
  },
  beforeRouteLeave (to, from, next) {
    this.$el.style.transform = 'translate3d(100%, 0, 0)'
    setTimeout(() => {
      requestAnimationFrame(next)
    }, 320)
  }
}

export {
  parent,
  children
}
