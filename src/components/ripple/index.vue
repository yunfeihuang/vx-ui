<template>
  <div :class="classes" @click="clickHandler" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
let node = null
let offset = {}
let timer = null
export default {
  props: {
    color: {
      type: String
    },
    position: {
      type: String
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'ripple']
    }
  },
  mounted () {
    this.$el.addEventListener('touchstart', this.touchStartHandler, false)
    this.$el.addEventListener('touchend', this.touchEndHandler, false)
  },
  methods: {
    clickHandler (e) {
      this.$emit('click', e)
    },
    getOffset (rect, {pageX, pageY}) {
      if (this.position === 'center') {
        return {
          top: rect.height / 2,
          left: rect.width / 2,
          width: rect.width,
          height: rect.height
        }
      } else {
        return {
          top: pageY - rect.top,
          left: pageX - rect.left,
          width: rect.width,
          height: rect.height
        }
      }
    },
    touchStartHandler (e) {
      offset = this.getOffset(this.$el.getBoundingClientRect(), e.changedTouches[0])
      node = document.createElement('div')
      node.classList.add(cssPrefix + 'ripple-shadow')
      node.style.cssText = 'top:' + offset.top + 'px;left:' + offset.left + 'px;'
      if (this.color) {
        node.style.backgroundColor = this.color
      }
      this.$el.appendChild(node)
      timer = setTimeout(() => {
        node.style.transition = node.style.webkitTransition = 'transform 0.3s ease-in-out 0s'
        node.style.transform = node.style.webkitTransform = 'scale(1.4)'
      })
    },
    touchEndHandler (e) {
      timer && clearTimeout(timer)
      node.style.transition = node.style.webkitTransition = ''
      node.style.transform = node.style.webkitTransform = 'scale(' + (Math.max(offset.height, offset.width) / 5) + ')'
      node.style.opacity = '0'
      setTimeout(((node) => {
        node.parentNode.removeChild(node)
      }).bind(this, node), 1000)
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
    &ripple{
      position:relative;
      overflow: hidden;
      user-select:none;
      &-shadow{
        position:absolute;
        background:rgba(0,0,0,0.09);
        min-height:44px;
        min-width:44px;
        border-radius:50%;
        margin:-20px;
        transition:transform 1s ease-in-out 0s,opacity 0.4s linear 0s;
        pointer-events: none;
      }
    }
  }
</style>
