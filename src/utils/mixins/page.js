const parent = {
  methods: {
    pageLoad (vue) {
      requestAnimationFrame(() => {
        vue.$el.style.opacity = '1'
        vue.$el.style.transform = 'translate3d(0, 0, 0)'
        setTimeout(() => {
          requestAnimationFrame(() => {
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
        }, 320)
      })
    }
  }
}
const children = {
  beforeMount () {
    this.$nextTick(() => {
      this.$parent.pageLoad(this)
    })
  },
  data () {
    return {
      pageState: {into: false}
    }
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
