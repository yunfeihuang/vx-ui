<template>
  <div :class="_clas" :style="style" @click="clickHandler"><slot></slot></div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
let node = null
let offset = {}
let timer = null
export default {
  mixins: [base],
  computed: {
    _clas () {
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
    touchStartHandler (e) {
      let rect = this.$el.getBoundingClientRect()
      offset = {
        width: this.$el.offsetWidth,
        height: this.$el.offsetHeight
      }
      offset.max = Math.max(offset.height, offset.width)
      node = document.createElement('div')
      node.classList.add(cssPrefix + 'ripple-shadow')
      node.style.cssText = 'top:' + (e.changedTouches[0].pageY - rect.top) + 'px;left:' + (e.changedTouches[0].pageX - rect.left) + 'px;'
      this.$el.appendChild(node)
      timer = setTimeout(() => {
        node.style.transition = node.style.webkitTransition = 'transform 0.1s ease-in-out 0s'
        node.style.transform = node.style.webkitTransform = 'scale(6)'
      })
    },
    touchEndHandler (e) {
      timer && clearTimeout(timer)
      node.style.transition = node.style.webkitTransition = ''
      node.style.transform = node.style.webkitTransform = 'scale(' + (offset.max / 5) + ')'
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
        background:rgba(0,0,0,0.15);
        min-height:10px;
        min-width:10px;
        border-radius:50%;
        margin:-5px;
        transition:transform 0.5s ease-in-out 0s,opacity 0.4s linear 0s;
        pointer-events: none;
      }
    }
  }
</style>
