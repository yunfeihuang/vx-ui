<template>
  <div ref="el" :class="['vx-range--wrapper', {'is-disabled': disabled}]">
    <div class="vx-range--mask" :style="{height:barHeight, borderRadius: barHeight}"></div>
    <div class="vx-range--inner">
      <div
        class="vx-range--value"
        :style="{
          width: (value.length ? value[1] : value) / max * 100 + '%', 
          height:barHeight,
          borderTopLeftRadius: barHeight,
          borderBottomLeftRadius: barHeight
        }">
      </div>
      <div
        v-if="value.length"
        class="vx-range--min-value" 
        :style="{
          width: value[0] / max * 100 + '%',
          height:barHeight,
          borderTopLeftRadius: barHeight,
          borderBottomLeftRadius: barHeight
        }"></div>
      <button
        v-if="value.length"
        class="vx-range--button"
        :style="{left: value[0] / max * 100 + '%'}"
        @touchstart.prevent="handleTouchStart('start', $event)"
        @mousedown.prevent="handleTouchStart('start', $event)">
        <span v-if="showTips == 'start'">
          {{`${value.length ? value[0] : value}${unit ? typeof unit === 'function' ? unit(value.length ? value[0] : value) : unit : ''}`}}
        </span>
      </button>
      <button
        class="vx-range--button"
        :style="{left: (value.length ? value[1] : value) / max * 100 + '%'}"
        @touchstart.prevent="handleTouchStart('end', $event)"
        @mousedown.prevent="handleTouchStart('end', $event)">
        <span v-if="showTips == 'end'">
          {{`${value.length ? value[1] : value}${unit ? typeof unit === 'function' ? unit(value.length ? value[1] : value) : unit : ''}`}}
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import { input } from '@/utils/mixins'
import { ref, watch } from 'vue'
export default {
  name: 'VxRange',
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
    modelValue: {
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
  setup (props, { emit }) {
    const value = ref(props.modelValue)
    const startLeft = ref(0)
    const endLeft = ref(0)
    const showTips = ref('')
    const stepRate = 1 / props.step
    const parseValue = (value) => {
      if (value < props.min) {
        return Math.round(props.min * stepRate) / stepRate
      } else if (value > props.max) {
        return Math.round(props.max * stepRate) / stepRate
      } else {
        return Math.round(value * stepRate) / stepRate
      }
    }
    const handleTouchStart = (type, e) => {
      showTips.value = type
      let pageX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX
      let offsetWidth = e.currentTarget.parentNode.offsetWidth
      const parseLeft = val => {
        return parseFloat(val) / 100 * offsetWidth
      }
      let initLeft = parseLeft(e.currentTarget.style.left)
      let maxLeft = 0
      let minLeft = 0
      if (type === 'end') {
        maxLeft = offsetWidth
        minLeft = value.value.length ? value.value[0] / props.max * offsetWidth : 0
      } else if (value.value.length) {
        maxLeft = value.value[1] / props.max * offsetWidth
      }
      const handleTouchMove = e => {
        let left = initLeft + ((e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - pageX)
        left = left < minLeft ? minLeft : left > maxLeft ? maxLeft : left
        if (!value.value.length) {
          value.value = parseValue(left / offsetWidth * props.max)
        } else {
          value.value[type == 'end' ? 1 : 0] = parseValue(left / offsetWidth * props.max)
        }
      }
      const handleTouchEnd  = () => {
        document.removeEventListener(e.changedTouches ? 'touchmove' : 'mousemove', handleTouchMove, false)
        showTips.value = ''
        emit('update:modelValue', value.value)
      }
      document.addEventListener(e.changedTouches ? 'touchmove': 'mousemove', handleTouchMove, false)
      document.addEventListener(e.changedTouches ? 'touchend' : 'mouseup', handleTouchEnd, {
        once: true
      })
    }
    watch(() => props.modelValue, val => {
      value.value = val
    })
    return {
      value,
      startLeft,
      endLeft,
      showTips,
      handleTouchStart
    }
  }
}
</script>
