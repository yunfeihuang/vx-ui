<template>
  <div :class="[cssPrefix + 'img-wrapper',!loading ? cssPrefix + 'img-placeholder' : '']" @click="clickHandler">
    <img
      :class="classes"
      :alt="alt"
      @error="errorHandler"
      @load='loadHandler'
    />
    <spinner v-if="loading" :class="cssPrefix + 'img-spinner'"/>
    <i class="iconfont" v-if="!loading">&#xe728;</i>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import Spinner from '../spinner'

export default {
  components: {
    Spinner
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
  mounted () {
    let node = this.scrollElement = this.$el.closest('.scrollbox') || window
    if (!node.lazyloadImages) {
      node.lazyloadImages = []
      node.scrollTimer = null
      node.onscroll = (e) => {
        e.target.scrollTimer && clearTimeout(e.target.scrollTimer)
        e.target.scrollTimer = setTimeout(() => {
          e.target.lazyloadImages = e.target.lazyloadImages.filter((item) => {
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
    } else {
      this.setSource()
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'img', this.lazyload ? cssPrefix + 'img-lazyload' : '']
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
      return rect.top >= 0 && rect.left >= 0 && rect.top <= window.innerHeight
    },
    setSource () {
      if (this.src) {
        let image = new Image()
        image.onload = (e) => {
          let icon = this.$el.querySelector('.iconfont') || this.$el.querySelector('.' + cssPrefix + 'img-spinner')
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
    scrollHandler (e) {
      if (this.inViewPort()) {
        e.currentTarget && e.currentTarget.removeEventListener('scroll', this.scrollHandler)
        this.setSource()
      }
    },
    errorHandler (e) {
      this.$emit('error', e)
    },
    loadHandler (e) {
      this.$emit('load', e)
    },
    clickHandler (e) {
      this.$emit('click', e)
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
      &-lazyload{
        opacity:0;
        transition:opacity 0.4s ease 0s;
        background-color: #fff;
      }
      &-wrapper{
        vertical-align: middle;
        font-size:0;
        position:relative;
        img{
          min-height:20px;
          min-width:20px;
          max-width:100%;
          max-height:100%;
        }
        .iconfont{
          font-size:16px;
          position:absolute;
          top:50%;
          left:50%;
          margin:-8px;
        }
      }
      &-placeholder{
        background:#f5f5f5;
        .iconfont{
          font-size:26px;
          color:#fff;
          margin:-13px;
        }
      }
      &-spinner{
        position:absolute;
        margin:-10px;
        top:50%;
        left:50%;
      }
    }
  }
</style>
