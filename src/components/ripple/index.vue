<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
let node = null
let offset = {}
let timer = null
export default {
  componentName: 'Ripple',
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
      return [this.$cssPrefix + 'ripple']
    }
  },
  mounted () {
    if (document.touchstart === undefined) {
      this.$el.addEventListener('mousedown', this.handleTouchStart, false)
      this.$el.addEventListener('mouseup', this.handleTouchEnd, false)
    } else {
      this.$el.addEventListener('touchstart', this.handleTouchStart, false)
      this.$el.addEventListener('touchend', this.handleTouchEnd, false)
    }
  },
  methods: {
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
    handleTouchStart (e) {
      let shadow = this.$el.querySelector('.' + this.$cssPrefix + 'ripple-shadow')
      shadow && shadow.parentNode.removeChild(shadow)
      offset = this.getOffset(this.$el.getBoundingClientRect(), e.changedTouches ? e.changedTouches[0] : e)
      node = document.createElement('div')
      node.classList.add(this.$cssPrefix + 'ripple-shadow')
      node.style.cssText = 'top:' + offset.top + 'px;left:' + offset.left + 'px;'
      if (this.color) {
        node.style.backgroundColor = this.color
      }
      this.$el.appendChild(node)
      timer = setTimeout(() => {
        node.style.transition = node.style.webkitTransition = 'transform 0.3s ease-in-out 0s'
        node.style.transform = node.style.webkitTransform = 'scale(1.4)'
      })
      e.preventDefault()
    },
    handleTouchEnd (e) {
      timer && clearTimeout(timer)
      node.style.transition = node.style.webkitTransition = ''
      node.style.transform = node.style.webkitTransform = 'scale(' + (Math.max(offset.height, offset.width) / 5) + ')'
      node.style.opacity = '0'
      setTimeout(((node) => {
        node.parentNode && node.parentNode.removeChild(node)
      }).bind(this, node), 1000)
    }
  }
}
</script>
