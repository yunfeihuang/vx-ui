<template>
  <div :class="classes">
    <div :class="[cssPrefix+'range-mask']"></div>
    <div :class="[cssPrefix+'range-value']" ></div>
    <div :class="[cssPrefix+'range-button']" @mousedown="touchStartHandler" @touchstart="touchStartHandler">
      <div :class="[cssPrefix+'range-tips']">0</div>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { input } from 'utils/mixins.js'
export default {
  name: 'Range',
  mixins: [input],
  computed: {
    classes () {
      let array = [cssPrefix + 'range-wrapper']
      if (this.disabled) {
        array.push(cssPrefix + 'range-disabled')
      }
      return array
    },
    offsetLeft () {
      return {
        left: this.value / this.max * this.$el.offsetWidth + 'px'
      }
    },
    offsetWidth () {
      return {
        width: this.value / this.max * this.$el.offsetWidth + 'px'
      }
    },
    myValue () {
      if (this.value < this.min) {
        return this.min
      }
      if (this.value > this.max) {
        return this.max
      }
      return this.value
    },
    range () {
      return this.max - this.min
    },
    stepRate () {
      return 1 / this.step
    }
  },
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    let left = (this.myValue - this.min) / this.range * this.$el.offsetWidth
    let valueDom = this.$el.querySelector('.' + cssPrefix + 'range-value')
    let buttonDom = this.$el.querySelector('.' + cssPrefix + 'range-button')
    let tipsDom = this.$el.querySelector('.' + cssPrefix + 'range-tips')
    valueDom.style.width = buttonDom.style.left = left + 'px'
    tipsDom.innerHTML = Math.round(this.myValue * this.stepRate) / this.stepRate
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    changeHandler (val) {
      this.$emit('on-change', val).$emit('input', val)
    },
    touchStartHandler (e) {
      e.preventDefault()
      if (!this.disabled) {
        let position = this.getPosition(e)
        let button = e.target
        let start = true
        let buttonLeft = button.style.left
        let touch = Object.assign({
          left: buttonLeft ? parseFloat(buttonLeft) : 0,
          maxLeft: this.$el.querySelector('.' + cssPrefix + 'range-mask').offsetWidth - button.offsetWidth
        }, position)
        let valueDom = this.$el.querySelector('.' + cssPrefix + 'range-value')
        let tipsDom = this.$el.querySelector('.' + cssPrefix + 'range-tips')
        tipsDom.style.display = 'block'
        let self = this
        let value = this.myValue
        let touchMoveHandler = (event) => {
          if (start) {
            let movePosition = self.getPosition(event)
            let left = movePosition.pageX - position.pageX + touch.left
            left = left < 0 ? 0 : left
            left = left > touch.maxLeft ? touch.maxLeft : left
            buttonLeft = left
            button.style.left = valueDom.style.width = left + 'px'
            tipsDom.innerHTML = value = Math.round((buttonLeft / touch.maxLeft * this.range + this.min) * this.stepRate) / this.stepRate
            event.preventDefault()
          }
        }
        let touchEndHandler = () => {
          document.removeEventListener(document.ontouchmove !== undefined ? 'touchmove' : 'mousemove', touchMoveHandler)
          document.removeEventListener(document.ontouchend !== undefined ? 'touchend' : 'mouseup', touchEndHandler)
          start = false
          tipsDom.style.display = 'none'
          self.changeHandler(value)
        }
        document.addEventListener(document.ontouchmove !== undefined ? 'touchmove' : 'mousemove', touchMoveHandler, false)
        document.addEventListener(document.ontouchend !== undefined ? 'touchend' : 'mouseup', touchEndHandler, false)
      }
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
