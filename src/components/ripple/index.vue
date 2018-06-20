<template>
  <div class="vx-ripple" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
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
      let shadow = this.$el.querySelector('.vx-ripple-shadow')
      shadow && shadow.parentNode.removeChild(shadow)
      this.$$offset = this.getOffset(this.$el.getBoundingClientRect(), e.changedTouches ? e.changedTouches[0] : e)
      this.$$node = document.createElement('div')
      this.$$node.classList.add('vx-ripple-shadow')
      this.$$node.style.cssText = 'top:' + this.$$offset.top + 'px;left:' + this.$$offset.left + 'px;'
      if (this.color) {
        this.$$node.style.backgroundColor = this.color
      }
      this.$el.appendChild(this.$$node)
      this.$$timer = setTimeout(() => {
        this.$$node.style.transition = this.$$node.style.webkitTransition = `transform 0.25s ease-in-out 0s`
        this.$$node.style.transform = this.$$node.style.webkitTransform = 'scale(1.4)'
      })
      e.preventDefault()
    },
    handleTouchEnd (e) {
      this.$$timer && clearTimeout(this.$$timer)
      let max = Math.max(this.$$offset.height, this.$$offset.width)
      this.$$duration = max / 400
      if (this.$$duration < 0.6) {
        this.$$duration = 0.6
      } else if (this.$$duration > 2) {
        this.$$duration = 2
      }
      this.$$node.style.transition = this.$$node.style.webkitTransition = `transform ${this.$$duration}s ease-in-out 0s, opacity ${this.$$duration - 0.3}s linear 0s`
      this.$$node.style.transform = this.$$node.style.webkitTransform = 'scale(' + (Math.max(this.$$offset.height, this.$$offset.width) / 5) + ')'
      this.$$node.style.opacity = '0'
      setTimeout(((node) => {
        node.parentNode && node.parentNode.removeChild(node)
      }).bind(this, this.$$node), this.$$duration * 1000)
    }
  }
}
</script>
