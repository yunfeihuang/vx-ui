<template>
  <div
    :class="classes"
    @touchstart="handleTouchStart"
    @mousedown="handleTouchStart"
    onselectstart="return false;"
    >
    <div :class="$cssPrefix + 'swipeout-inner'">
      <div :class="$cssPrefix + 'swipeout-content'">
        <slot></slot>
      </div>
      <div :class="$cssPrefix + 'swipeout-action'" @click="handleAction">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {Flexbox} from '../flexbox'
let swipeoutVue = null
export default {
  componentName: 'Swipeout',
  components: {
    Flexbox
  },
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
  computed: {
    classes () {
      return [this.$cssPrefix + 'swipeout', this.divider ? this.$cssPrefix + 'swipeout-divider' : '']
    }
  },
  watch: {
    open (value) {
      this.setTranslateX(value ? -this.$touch.maxTranslateX : 0)
    }
  },
  created () {
    this.$touch = {}
  },
  mounted () {
    let node = this.$el.querySelector('.' + this.$cssPrefix + 'swipeout-action')
    this.$touch.maxTranslateX = node.offsetWidth
    this.$touch.el = this.$el.querySelector('.' + this.$cssPrefix + 'swipeout-inner')
    requestAnimationFrame(() => {
      node.style.height = node.parentNode.offsetHeight + 'px'
      this.open && this.setTranslateX(-this.$touch.maxTranslateX, null, false)
    })
  },
  destroyed () {
    if (swipeoutVue === this) {
      swipeoutVue = null
    }
    this.$touch = null
  },
  methods: {
    setTranslateX (x, el, transition = true) {
      el = el || this.$touch.el
      swipeoutVue = x < 0 ? this : null
      el.style.webkitTransition = el.style.transition = transition ? '' : 'none'
      el.style.webkitTransform = el.style.transform = 'translateX(' + x + 'px)'
    },
    handleTouchStart (e) {
      if (!this.disabled) {
        swipeoutVue && swipeoutVue !== this && swipeoutVue.handleAction()
        let currentTranslateX = 0
        if (this.$touch.el) {
          let transform = this.$touch.el.style.transform || this.$touch.el.style.webkitTransform
          if (transform) {
            currentTranslateX = parseInt(transform.match(/[-\d]+/g)[0])
          }
        }
        Object.assign(this.$touch, this.getPosition(e), {
          start: true,
          currentTranslateX: currentTranslateX
        })
        document.addEventListener('touchmove', this.handleTouchMove, false)
        document.addEventListener('touchend', this.handleTouchEnd, false)
        document.addEventListener('mousemove', this.handleTouchMove, false)
        document.addEventListener('mouseup', this.handleTouchEnd, false)
      }
    },
    handleTouchMove (e) {
      let {pageY, pageX} = this.getPosition(e)
      if (this.$touch.start && Math.abs(pageY - this.$touch.pageY) < Math.abs(pageX - this.$touch.pageX)) {
        this.$touch.diffX = pageX - this.$touch.pageX
        this.$touch.translateX = this.$touch.diffX + this.$touch.currentTranslateX
        this.$touch.translateX = this.$touch.translateX > 0 ? 0 : this.$touch.translateX
        if (Math.abs(this.$touch.translateX) > this.$touch.maxTranslateX) {
          this.$touch.translateX = this.$touch.translateX > 0 ? this.$touch.maxTranslateX : -this.$touch.maxTranslateX
        }
        this.setTranslateX(this.$touch.translateX, this.$touch.el, false)
        e.stopPropagation()
        e.preventDefault()
      }
    },
    handleTouchEnd (e) {
      if (this.$touch.start) {
        this.$touch.start = false
        if (this.$touch.diffX === 0) {
          this.$emit('click', this.$el)
        }
        if (Math.abs(this.$touch.diffX) > 60) {
          this.$touch.translateX = this.$touch.diffX < 0 ? -this.$touch.maxTranslateX : 0
        } else {
          this.$touch.translateX = this.$touch.currentTranslateX
        }
        requestAnimationFrame(() => {
          this.setTranslateX(this.$touch.translateX)
        })
        if (this.$touch.currentTranslateX !== this.$touch.translateX) {
          this.$emit(this.$touch.translateX === 0 ? 'close' : 'open')
        }
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
