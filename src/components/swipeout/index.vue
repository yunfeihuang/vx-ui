<template>
  <div 
    :class="classes"
    @touchstart="touchStartHandler"
    @touchmove="touchMoveHandler"
    @touchend="touchEndHandler"
    onselectstart="return false;"
    >
    <div :class="cssPrefix + 'swipeout-inner'">
      <div :class="cssPrefix + 'swipeout-content'">
        <slot></slot>
      </div>
      <div :class="cssPrefix + 'swipeout-action'" @click="actionHandler">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import {Flexbox} from '../flexbox'
let swipeoutVue = null
export default {
  components: {
    Flexbox
  },
  computed: {
    classes () {
      return [cssPrefix + 'swipeout']
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
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
  destroyed () {
    if (swipeoutVue === this) {
      swipeoutVue = null
    }
    this.$touch = null
  },
  mounted () {
    let node = this.$el.querySelector('.' + cssPrefix + 'swipeout-action')
    this.$touch.maxTranslateX = node.offsetWidth
    this.$touch.el = this.$el.querySelector('.' + cssPrefix + 'swipeout-inner')
    requestAnimationFrame(() => {
      node.style.height = node.parentNode.offsetHeight + 'px'
      this.open && this.setTranslateX(-this.$touch.maxTranslateX, null, false)
    })
  },
  methods: {
    setTranslateX (x, el, transition = true) {
      el = el || this.$touch.el
      swipeoutVue = x < 0 ? this : null
      el.style.webkitTransition = el.style.transition = transition ? '' : 'none'
      el.style.webkitTransform = el.style.transform = 'translateX(' + x + 'px)'
    },
    touchStartHandler (e) {
      if (!this.disabled) {
        swipeoutVue && swipeoutVue !== this && swipeoutVue.actionHandler()
        let currentTranslateX = 0
        if (this.$touch.el) {
          let transform = this.$touch.el.style.transform || this.$touch.el.style.webkitTransform
          if (transform) {
            currentTranslateX = parseInt(transform.match(/[-\d]+/g)[0])
          }
        }
        Object.assign(this.$touch, {
          start: true,
          pageX: e.changedTouches[0].pageX,
          pageY: e.changedTouches[0].pageY,
          currentTranslateX: currentTranslateX
        })
      }
    },
    touchMoveHandler (e) {
      let pageY = e.changedTouches[0].pageY
      let pageX = e.changedTouches[0].pageX
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
    touchEndHandler () {
      if (this.$touch.start) {
        this.$touch.start = false
        if (Math.abs(this.$touch.diffX) > 60) {
          this.$touch.translateX = this.$touch.diffX < 0 ? -this.$touch.maxTranslateX : 0
        } else {
          this.$touch.translateX = this.$touch.currentTranslateX
        }
        requestAnimationFrame(() => {
          this.setTranslateX(this.$touch.translateX)
        })
        if (this.$touch.currentTranslateX !== this.$touch.translateX) {
          this.$emit(this.$touch.translateX === 0 ? 'on-close' : 'on-open')
        }
      }
    },
    actionHandler () {
      requestAnimationFrame(() => {
        this.setTranslateX(0, 0)
      })
      this.$emit('on-close')
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
    &swipeout{
      white-space: nowrap;
      position:relative;
      overflow:hidden;
      &::-webkit-scrollbar{
        display:none;
      }
      
      &-inner{
        transition:transform 0.2s ease-out 0s;
      }
      &-content{
        width:100%;
        display:inline-block;
        vertical-align: top;
        position:relative;
      }
      &-action{
        display:inline-block;
        vertical-align: top;
        padding-left:10px;
        button{
          @include button;
          height:100%;
          min-width:50px;
        }
      }
    }
  }
</style>
