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
  name: 'XImg',
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
    let node = this.scrollElement = this.$el.closest('.scrollbox') || window
    if (!node.lazyloadImages) {
      node.lazyloadImages = []
      node.scrollTimer = null
      node.onscroll = (e) => {
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
        node.lazyloadImages.push({
          img: this,
          loaded: false
        })
      }
    }
  },
  destroyed () {
    let self = this
    this.scrollElement.lazyloadImages = this.scrollElement.lazyloadImages.filter((item) => {
      return item !== self
    })
  },
  methods: {
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
