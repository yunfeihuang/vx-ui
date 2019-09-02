<template>
  <img v-bind="$attrs"
    class="vx-img"
    :src="mySrc"
    :style="`background-image:${background};`"
    :class="`${status? 'is-' + status : ''}`"
    v-on="$listeners" />
</template>

<script>
import error from './error.svg'
import placeholder from './placeholder.svg'
import loading from './loading.svg'
const transparent = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='
export default {
  name: 'XImg',
  componentName: 'XImg',
  props: {
    src: {
      type: String
    },
    alt: {
      type: String
    },
    lazyload: {
      type: Boolean
    }
  },
  watch: {
    src () {
      this.$nextTick(this.beforeLoading)
    }
  },
  mounted () {
    this.beforeLoading()
  },
  data () {
    return {
      status: '',
      background: '',
      mySrc: transparent,
      isScrollEvent: false
    }
  },
  beforeDestroy () {
    this.isScrollEvent && this.removeScrollEvent()
  },
  methods: {
    getScrollNode (node) {
      let n = node
      let closest = () => {
        let styleObject = window.getComputedStyle(n)
        if (!(['scroll', 'auto'].indexOf(styleObject['overflow']) > -1 || ['scroll', 'auto'].indexOf(styleObject['overflow-y']) > -1 || styleObject['-webkit-overflow-scrolling'] === 'touch' || styleObject['overflow-scrolling'] === 'touch')) {
          n = n.offsetParent
          if (n === document.body) {
            n = window
          } else {
            n && closest()
          }
        }
      }
      if (document.body === n) {
        n = window
      } else {
        closest()
      }
      return n
    },
    inViewPort () {
      if (this.$el.offsetWidth === 0 && this.$el.offsetHeight === 0) {
        return false
      }
      let rect = this.$el.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.left < window.innerWidth
    },
    handleScroll () {
      this.$$timer && clearTimeout(this.$$timer)
      this.$$timer = setTimeout(() => {
        if (this.inViewPort()) {
          this.removeScrollEvent()
          this.loading()
        }
      }, 200)
    },
    removeScrollEvent () {
      this.$$scrollNode.removeEventListener('scroll', this.handleScroll)
      this.isScrollEvent = false
    },
    beforeLoading () {
      this.status = ''
      if (this.lazyload && !this.isScrollEvent && !this.inViewPort()) {
        this.$$scrollNode = this.getScrollNode(this.$el.parentNode)
        this.$$scrollNode.addEventListener('scroll', this.handleScroll)
        this.isScrollEvent = true
      } else {
        this.loading()
      }
    },
    loading () {
      if (this.src) {
        this.render(undefined, loading)
        this.status = 'loading'
        let image = new Image()
        image.onload = () => {
          this.render(this.src, '')
          this.status = 'success'
          this.$emit('load')
        }
        image.onerror = () => {
          this.render(undefined, error)
          this.status = 'error'
          this.$emit('error')
        }
        image.src = this.src
      } else {
        this.render(undefined, placeholder)
        this.status = 'placeholder'
      }
    },
    render (src = transparent, background) {
      if (background) {
        background = `url(${background})`
      }
      this.mySrc = src
      this.background = background
    }
  }
}
</script>
