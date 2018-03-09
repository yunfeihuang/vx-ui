<template>
  <div :class="classes">
    <div :class="[$cssPrefix+'range-mask']"></div>
    <div :class="[$cssPrefix+'range-value']" ></div>
    <div :class="[$cssPrefix+'range-button']" @mousedown="handleTouchStart" @touchstart="handleTouchStart">
      <div :class="[$cssPrefix+'range-tips']">0</div>
    </div>
  </div>
</template>

<script>
import { input } from 'utils/mixins.js'
export default {
  componentName: 'Range',
  mixins: [input],
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      let array = [this.$cssPrefix + 'range-wrapper']
      if (this.disabled) {
        array.push(this.$cssPrefix + 'range-disabled')
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
      return Math.round(this.value * this.stepRate) / this.stepRate
    },
    range () {
      return this.max - this.min
    },
    stepRate () {
      return 1 / this.step
    }
  },
  watch: {
    value () {
      this.renderRange()
    }
  },
  mounted () {
    this.getRangeInitData()
    this.$nextTick(this.renderRange)
  },
  methods: {
    getRangeInitData () {
      let controlNode = this.$el.querySelector('.' + this.$cssPrefix + 'range-button')
      let valueNode = this.$el.querySelector('.' + this.$cssPrefix + 'range-value')
      let tipsNode = this.$el.querySelector('.' + this.$cssPrefix + 'range-tips')
      let maskNode = this.$el.querySelector('.' + this.$cssPrefix + 'range-mask')
      this.$range = {
        maxLeft: maskNode.offsetWidth - controlNode.offsetWidth,
        controlNode,
        valueNode,
        tipsNode
      }
    },
    renderRange (value = this.myValue) {
      let left = Math.round((value - this.min) / this.range * this.$range.maxLeft) + 'px'
      this.$range.controlNode.style.left = this.$range.valueNode.style.width = left
      this.$range.tipsNode.innerHTML = this.myValue
    },
    handleChange (val) {
      this.$emit('change', val).$emit('input', val)
    },
    handleTouchStart (e) {
      e.preventDefault()
      if (!this.disabled) {
        let position = this.getPosition(e)
        let start = true
        let buttonLeft = this.$range.controlNode.style.left
        let touch = Object.assign({
          left: buttonLeft ? parseFloat(buttonLeft) : 0
        }, position)
        this.$range.tipsNode.style.display = 'block'
        let self = this
        let value = this.myValue
        let handleTouchMove = (event) => {
          if (start) {
            let movePosition = self.getPosition(event)
            let left = movePosition.pageX - position.pageX + touch.left
            left = left < 0 ? 0 : left
            left = left > this.$range.maxLeft ? this.$range.maxLeft : left
            buttonLeft = left
            this.$range.controlNode.style.left = this.$range.valueNode.style.width = left + 'px'
            this.$range.tipsNode.innerHTML = value = Math.round((buttonLeft / this.$range.maxLeft * this.range + this.min) * this.stepRate) / this.stepRate
            event.preventDefault()
          }
        }
        let handleTouchEnd = () => {
          document.removeEventListener(document.ontouchmove !== undefined ? 'touchmove' : 'mousemove', handleTouchMove)
          document.removeEventListener(document.ontouchend !== undefined ? 'touchend' : 'mouseup', handleTouchEnd)
          start = false
          this.$range.tipsNode.style.display = 'none'
          self.handleChange(value)
        }
        document.addEventListener(document.ontouchmove !== undefined ? 'touchmove' : 'mousemove', handleTouchMove, false)
        document.addEventListener(document.ontouchend !== undefined ? 'touchend' : 'mouseup', handleTouchEnd, false)
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
