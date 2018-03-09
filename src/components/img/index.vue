<template>
  <div :class="[$cssPrefix + 'img-wrapper',!loading ? $cssPrefix + 'img-placeholder' : '']">
    <img
      :class="classes"
      :alt="alt"
      @error="handleError"
      @load='handleLoad'
    />
    <spinner v-if="loading" :class="$cssPrefix + 'img-spinner'"/>
    <icon v-if="!loading">&#xe728;</icon>
  </div>
</template>

<script>
import Spinner from '../spinner'
import Icon from '../icon'

export default {
  componentName: 'XImg',
  components: {
    Spinner,
    Icon
  },
  props: {
    src: {
      type: String
    },
    srcset: {
      type: String
    },
    alt: {
      type: String
    },
    lazyload: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'img', this.lazyload ? this.$cssPrefix + 'img-lazyload' : '']
    }
  },
  mounted () {
    this.$scrollNode = this.getScrollNode(this.$el.offsetParent)
    if (!this.$scrollNode.lazyloadImages) {
      this.$scrollNode.lazyloadImages = []
      this.$scrollNode.scrollTimer = null
      this.$scrollNode.onscroll = (e) => {
        e.target.scrollTimer && clearTimeout(e.target.scrollTimer)
        e.target.scrollTimer = setTimeout(() => {
          e.target.lazyloadImages = e.target.lazyloadImages.filter((item, index) => {
            if (item.loaded === false && item.img.inViewPort()) {
              item.img.setSource()
              return false
            } else {
              return true
            }
          })
        }, 500)
      }
    }
    if (this.lazyload) {
      if (this.inViewPort()) {
        this.setSource()
      } else {
        this.$scrollNode.lazyloadImages.push({
          img: this,
          loaded: false
        })
      }
    }
  },
  destroyed () {
    let self = this
    this.$scrollNode.lazyloadImages = this.$scrollNode.lazyloadImages.filter((item) => {
      return item !== self
    })
  },
  methods: {
    getScrollNode (node) {
      let n = node
      let closest = () => {
        let styleObject = window.getComputedStyle(n)
        if (!(['scroll', 'auto'].indexOf(styleObject['overflow']) > -1 || ['scroll', 'auto'].indexOf(styleObject['overflow-y']) > -1)) {
          n = n.offsetParent
          if (n === document.body) {
            n = document.body
          } else {
            closest()
          }
        }
      }
      document.body !== n && closest()
      return n
    },
    inViewPort () {
      if (this.$el.offsetWidth === 0 && this.$el.offsetHeight === 0) {
        return false
      }
      let rect = this.$el.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.left < window.innerWidth
    },
    setSource () {
      if (this.src) {
        let image = new Image()
        image.onload = (e) => {
          let icon = this.$el.querySelector('.' + this.$cssPrefix + 'iconfont') || this.$el.querySelector('.' + this.$cssPrefix + 'img-spinner')
          let img = this.$el.querySelector('img')
          requestAnimationFrame(() => {
            icon && (icon.style.display = 'none')
            img.src = this.src
            img.style.opacity = 1
            this.$el.classList.remove(this.$cssPrefix + 'img-placeholder')
          })
        }
        image.src = this.src
      }
      this.srcset && (this.$el.srcset = this.srcset)
    },
    handleScroll (e) {
      if (this.inViewPort()) {
        e.currentTarget && e.currentTarget.removeEventListener('scroll', this.handleScroll)
        this.setSource()
      }
    },
    handleError (e) {
      this.$emit('error', e)
    },
    handleLoad (e) {
      this.$emit('load', e)
    }
  }
}
</script>
