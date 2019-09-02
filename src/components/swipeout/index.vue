<template>
  <div
    :class="['vx-swipeout', {'is-divider': divider}]"
    onselectstart="return false;"
    >
    <div class="vx-swipeout--inner">
      <div class="vx-swipeout--content">
        <slot></slot>
      </div>
      <div class="vx-swipeout--action" @click="handleAction">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>

<script>
let swipeoutVue = null
export default {
  name: 'Swipeout',
  componentName: 'Swipeout',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    divider: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    open (value) {
      this.setTranslateX(value ? -this.$$touch.maxTranslateX : 0)
    }
  },
  created () {
    this.$$touch = {}
  },
  mounted () {
    this.init()
    let startEventName = window.document.body.ontouchstart === undefined ? 'mousedown' : 'touchstart'
    this.$el.addEventListener(startEventName, this.handleTouchStart, false)
    window.addEventListener('resize', this.init, false)
  },
  beforeDestroy () {
    if (swipeoutVue === this) {
      swipeoutVue = null
    }
    this.$$touch = null
    window.removeEventListener('resize', this.init)
  },
  methods: {
    init () {
      let node = this.$el.querySelector('.vx-swipeout--action')
      this.$$touch.maxTranslateX = node.offsetWidth
      this.$$touch.el = this.$el.querySelector('.vx-swipeout--inner')
      if (node.style.height) {
        node.style.height = ''
      }
      requestAnimationFrame(() => {
        node.style.height = node.parentNode.offsetHeight + 'px'
        this.open && this.setTranslateX(-this.$$touch.maxTranslateX, null, false)
      })
    },
    setTranslateX (x, el, transition = true) {
      el = el || this.$$touch.el
      swipeoutVue = x < 0 ? this : null
      el.style.webkitTransition = el.style.transition = transition ? '' : 'none'
      el.style.webkitTransform = el.style.transform = 'translate3d(' + x + 'px, 0, 0)'
    },
    handleTouchStart (e) {
      if (!this.disabled) {
        swipeoutVue && swipeoutVue !== this && swipeoutVue.handleAction()
        let currentTranslateX = 0
        if (this.$$touch.el) {
          let transform = this.$$touch.el.style.transform || this.$$touch.el.style.webkitTransform
          if (transform) {
            transform = transform.replace('translate3d', '')
            currentTranslateX = -parseInt(transform.match(/(\d+)/g)[0], 10)
          }
        }
        Object.assign(this.$$touch, this.getPosition(e), {
          start: true,
          currentTranslateX
        })
        document.addEventListener('touchmove', this.handleTouchMove, false)
        document.addEventListener('touchend', this.handleTouchEnd, false)
        document.addEventListener('mousemove', this.handleTouchMove, false)
        document.addEventListener('mouseup', this.handleTouchEnd, false)
      }
    },
    handleTouchMove (e) {
      let {pageY, pageX} = this.getPosition(e)
      this.$$touch.diffX = pageX - this.$$touch.pageX
      if (this.$$touch.start && Math.abs(pageY - this.$$touch.pageY) < Math.abs(pageX - this.$$touch.pageX)) {
        this.$$touch.translateX = this.$$touch.diffX + this.$$touch.currentTranslateX
        this.$$touch.translateX = this.$$touch.translateX > 0 ? 0 : this.$$touch.translateX
        if (Math.abs(this.$$touch.translateX) > this.$$touch.maxTranslateX) {
          this.$$touch.translateX = this.$$touch.translateX > 0 ? this.$$touch.maxTranslateX : -this.$$touch.maxTranslateX
        }
        this.setTranslateX(this.$$touch.translateX, this.$$touch.el, false)
        e.stopPropagation()
        e.preventDefault()
      }
    },
    handleTouchEnd (e) {
      if (this.$$touch.start) {
        this.$$touch.start = false
        if (this.$$touch.diffX === 0) {
          this.$emit('click', this.$el)
        } else {
          if (Math.abs(this.$$touch.diffX) > 60) {
            this.$$touch.translateX = this.$$touch.diffX < 0 ? -this.$$touch.maxTranslateX : 0
          } else {
            this.$$touch.translateX = this.$$touch.currentTranslateX
          }
          requestAnimationFrame(() => {
            this.setTranslateX(this.$$touch.translateX)
          })
          if (this.$$touch.currentTranslateX !== this.$$touch.translateX) {
            this.$emit(this.$$touch.translateX === 0 ? 'close' : 'open')
          }
        }
        this.$$touch.diffX = 0
        document.removeEventListener('touchmove', this.handleTouchMove)
        document.removeEventListener('touchend', this.handleTouchEnd)
        document.removeEventListener('mousemove', this.handleTouchMove)
        document.removeEventListener('mouseup', this.handleTouchEnd)
      }
    },
    handleAction () {
      requestAnimationFrame(() => {
        this.setTranslateX(0, 0)
      })
      this.$emit('close')
    },
    getPosition (e) {
      return {
        pageX: e.changedTouches ? e.changedTouches[0].pageX : e.pageX,
        pageY: e.changedTouches ? e.changedTouches[0].pageY : e.pageY
      }
    }
  }
}
</script>
