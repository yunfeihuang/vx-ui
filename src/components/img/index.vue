<template>
  <img
    :class="_clas"
    :style="style"
    :alt="alt"
    @error="errorHandler"
    @load='loadHandler'
  />
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
let node = null
export default {
  mixins: [base],
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
    }
  },
  mounted () {
    node = this.$el.closest('.scrollbox') || window
    if (this.lazyload) {
      if (this.inViewPort()) {
        this.setSource()
      } else {
        node.addEventListener('scroll', this.scrollHandler)
      }
    } else {
      this.setSource()
    }
  },
  computed: {
    _clas () {
      return [cssPrefix + 'img', this.lazyload ? cssPrefix + 'img-lazyload' : '', this.clas]
    }
  },
  methods: {
    inViewPort () {
      if (this.$el.offsetWidth === 0 && this.$el.offsetHeight === 0) {
        return false
      }
      let rect = this.$el.getBoundingClientRect()
      return rect.top >= 0 && rect.left >= 0 && rect.top <= window.innerHeight
    },
    setSource () {
      if (this.src) {
        let image = new Image()
        image.onload = (e) => {
          this.$el.src = this.src
          this.$el.style.opacity = 1
        }
        image.src = this.src
      }
      this.srcset && (this.$el.srcset = this.srcset)
    },
    scrollHandler (e) {
      if (this.inViewPort()) {
        e.currentTarget && e.currentTarget.removeEventListener('scroll', this.scrollHandler)
        this.setSource()
      }
    },
    errorHandler (e) {
      this.$emit('on-error', e)
    },
    loadHandler (e) {
      this.$emit('on-load', e)
      node = null
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &img{
      min-height:1px;
      min-width:1px;
      &-lazyload{
        opacity:0;
        transition:opacity 0.4s ease 0s;
      }
    }
  }
</style>
