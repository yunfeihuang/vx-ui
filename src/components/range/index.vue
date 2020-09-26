<template>
  <div :class="['vx-range--wrapper', {'is-disabled': disabled}]">
    <div class="vx-range--mask" :style="{height:barHeight}"></div>
    <button
      v-if="value.length"
      class="vx-range--button"
      :style="{left: start.left + 'px'}"
      @mousedown.prevent="handleTouchStart('start', $event)"
      @touchstart.prevent="handleTouchStart('start', $event)">
      <span v-if="start.moveing">{{changeValueText}}</span>
    </button>
    <div class="vx-range--value" :style="{width: (end.left > 0 ? end.left + 20 : 0) + 'px',height:barHeight}"></div>
    <div class="vx-range--min-value" :style="{height:barHeight,width: (start.left > 0 ? start.left + 20 : 0) + 'px'}"></div>
    <button
      class="vx-range--button"
      :style="{left: end.left + 'px'}"
      @mousedown.prevent="handleTouchStart('end', $event)"
      @touchstart.prevent="handleTouchStart('end', $event)">
      <span v-if="end.moveing">{{changeValueText}}</span>
    </button>
  </div>
</template>

<script>
import { input } from 'utils/mixins'
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
      type: [Number, Array],
      default: 0
    },
    disabled: {
      type: Boolean
    },
    unit: {
      type: [String, Function]
    },
    barHeight: {
      type: String,
      default: '1px'
    }
  },
  computed: {
    myValue () {
      if (this.value instanceof Array) {
        return [
          this.parseValue(this.value[0]),
          this.parseValue(this.value[1])
        ]
      } else {
        return this.parseValue(this.value)
      }
    },
    rangeValue () {
      return this.max - this.min
    },
    stepRate () {
      return 1 / this.step
    },
    changeValueText () {
      return `${this.changeValue}${this.unit ? typeof this.unit === 'function' ? this.unit(this.changeValue) : this.unit : ''}`
    }
  },
  watch: {
    value () {
      this.handleResize()
    }
  },
  data () {
    return {
      changeValue: 0,
      maxLeft: 0,
      start: {
        left: 0,
        moveing: false
      },
      end: {
        left: 0,
        moveing: false
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize, false)
    this.handleResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    parseValue (value) {
      if (value < this.min) {
        return Math.round(this.min * this.stepRate) / this.stepRate
      } else if (value > this.max) {
        return Math.round(this.max * this.stepRate) / this.stepRate
      } else {
        return Math.round(value * this.stepRate) / this.stepRate
      }
    },
    valueToLeft (value) {
      return Math.round((value - this.min) / this.rangeValue * this.maxLeft)
    },
    leftToValue (left) {
      return Math.round((left / this.maxLeft * this.rangeValue + this.min) * this.stepRate) / this.stepRate
    },
    handleResize () {
      let maskNode = this.$el.querySelector('.vx-range--mask')
      let buttonNode = this.$el.querySelector('.vx-range--button')
      let maskWidth = maskNode.offsetWidth
      let buttonWidth = buttonNode.offsetWidth
      this.maxLeft = maskWidth - buttonWidth
      if (this.value instanceof Array) {
        this.start.left = this.valueToLeft(this.myValue[0])
        this.end.left = this.valueToLeft(this.myValue[1])
      } else {
        this.end.left = this.valueToLeft(this.myValue)
      }
    },
    handleTouchStart (type, e) {
      let _data = this[type]
      _data.moveing = true
      let startLeft = _data.left
      let maxLeft = this.maxLeft
      let minLeft = 0
      this.changeValue = this.myValue
      if (this.value instanceof Array) {
        if (type === 'end') {
          // minLeft = this.start.left
          this.changeValue = this.myValue[1]
        } else {
          // maxLeft = this.end.left
          this.changeValue = this.myValue[0]
        }
      }
      let startPosition = this.getPosition(e)
      let handleTouchMove = (event) => {
        if (_data.moveing) {
          let movePosition = this.getPosition(event)
          let left = movePosition.pageX - startPosition.pageX + startLeft
          left = left < minLeft ? minLeft : left
          left = left > maxLeft ? maxLeft : left
          if (type === 'end') {
            if (left < this.start.left) {
              this.start.left = left
            }
          } else {
            if (left > this.end.left) {
              this.end.left = left
            }
          }
          _data.left = left
          this.changeValue = this.leftToValue(left)
          event.preventDefault()
        }
      }
      let handleTouchEnd = () => {
        document.removeEventListener(document.ontouchmove !== undefined ? 'touchmove' : 'mousemove', handleTouchMove)
        document.removeEventListener(document.ontouchend !== undefined ? 'touchend' : 'mouseup', handleTouchEnd)
        _data.moveing = false
        if (this.value instanceof Array) {
          this.handleChange([this.leftToValue(this.start.left), this.leftToValue(this.end.left)])
        } else {
          this.handleChange(this.changeValue)
        }
      }
      document.addEventListener(document.ontouchmove !== undefined ? 'touchmove' : 'mousemove', handleTouchMove, false)
      document.addEventListener(document.ontouchend !== undefined ? 'touchend' : 'mouseup', handleTouchEnd, false)
    },
    handleChange (val) {
      this.$emit('input', val).$emit('change', val)
      this.eDispatch('ElFormItem', 'el.form.blur', [val])
      this.eDispatch('ElFormItem', 'el.form.change', [val])
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
