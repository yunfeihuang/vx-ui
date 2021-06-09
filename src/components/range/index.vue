<template>
  <div :class="['vx-range--wrapper', {'is-disabled': disabled}]">
    <div class="vx-range--mask"></div>
    <div class="vx-range--value" ></div>
    <div class="vx-range--button" @mousedown="handleTouchStart" @touchstart="handleTouchStart">
      <div class="vx-range--tips">0</div>
    </div>
  </div>
</template>

<script>
import { input } from '@/utils/mixins'
export default {
  name: 'Range',
  componentName: 'Range',
  mixins: [input],
  props: {
    ...input.props,
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
    },
    unit: {
      type: [String, Function]
    }
  },
  computed: {
    offsetWidth () {
      return {
        width: this.value / this.max * this.$el.offsetWidth + 'px'
      }
    },
    myValue () {
      if (this.value < this.min) {
        return Math.round(this.min * this.stepRate) / this.stepRate
      }
      if (this.value > this.max) {
        return Math.round(this.max * this.stepRate) / this.stepRate
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
    this.$nextTick(this.getRangeInitData)
    this.$nextTick(this.renderRange)
    window.addEventListener('resize', this.handleResize, false)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    getRangeInitData () {
      let controlNode = this.$el.querySelector('.vx-range--button')
      let valueNode = this.$el.querySelector('.vx-range--value')
      let tipsNode = this.$el.querySelector('.vx-range--tips')
      let maskNode = this.$el.querySelector('.vx-range--mask')
      this.$$range = {
        maxLeft: maskNode.offsetWidth - controlNode.offsetWidth,
        controlNode,
        valueNode,
        tipsNode
      }
    },
    renderRange (value = this.myValue) {
      let left = Math.round((value - this.min) / this.range * this.$$range.maxLeft) + 'px'
      this.$$range.controlNode.style.left = this.$$range.valueNode.style.width = left
      this.$$range.tipsNode.innerHTML = this.getTipsText(this.myValue)
    },
    getTipsText (value) {
      return `${value}${this.unit ? typeof this.unit === 'function' ? this.unit(value) : this.unit : ''}`
    },
    handleChange (val) {
      this.$emit('input', val).$emit('change', val)
      this.eDispatch('ElFormItem', 'el.form.blur', [val])
      this.eDispatch('ElFormItem', 'el.form.change', [val])
    },
    handleResize () {
      this.getRangeInitData()
      this.renderRange()
    },
    handleTouchStart (e) {
      e.preventDefault()
      if (!this.disabled) {
        this.getRangeInitData()
        let position = this.getPosition(e)
        let start = true
        let buttonLeft = this.$$range.controlNode.style.left
        let touch = Object.assign({
          left: buttonLeft ? parseFloat(buttonLeft) : 0
        }, position)
        this.$$range.tipsNode.style.display = 'block'
        let self = this
        let value = this.myValue
        let handleTouchMove = (event) => {
          if (start) {
            let movePosition = self.getPosition(event)
            let left = movePosition.pageX - position.pageX + touch.left
            left = left < 0 ? 0 : left
            left = left > this.$$range.maxLeft ? this.$$range.maxLeft : left
            buttonLeft = left
            this.$$range.controlNode.style.left = this.$$range.valueNode.style.width = left + 'px'
            value = Math.round((buttonLeft / this.$$range.maxLeft * this.range + this.min) * this.stepRate) / this.stepRate
            this.$$range.tipsNode.innerHTML = this.getTipsText(value)
            event.preventDefault()
          }
        }
        let handleTouchEnd = () => {
          document.removeEventListener(document.ontouchmove !== undefined ? 'touchmove' : 'mousemove', handleTouchMove)
          document.removeEventListener(document.ontouchend !== undefined ? 'touchend' : 'mouseup', handleTouchEnd)
          start = false
          this.$$range.tipsNode.style.display = 'none'
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
