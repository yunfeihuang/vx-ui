<template>
  <div :class="['vx-input-number',`vx-input-number--size-${size}`,{'is-disabled': disabled}]">
    <div class="vx-input-number--inner">
      <button
        :disabled="min !== undefined ? modelValue <= min : false"
        class="vx-input-number--reduce"
        type="button"
        @click="handleChange(modelValue-buttonStep)">
        <slot name="reduce"></slot>
      </button>
      <slot name="value" v-if="$slots['value']" v-bind="$$props"></slot>
      <input
        v-else
        v-bind="$$props"
        type="number"
        :value="modelValue"
        @input="handleChange($event)"/>
      <button
        :disabled="max !== undefined ? max >= modelValue  : false"
        class="vx-input-number--add"
        type="button"
        @click="handleChange(modelValue+buttonStep)">
        <slot name="add"></slot>
      </button>
    </div>
  </div>
</template>

<script>
import { input } from '@/utils/mixins'
export default {
  name: 'VxInputNumber',
  mixins: [input],
  emits: ['input', 'change'],
  props: {
    ...input.props,
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    step: {
      type: Number,
      default: 1
    },
    buttonStep: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  setup (props, context) {
    /*
    watch(() => props.modelValue, (val, oldVal) => {
      console.log(val, oldVal)
      myValue.value = val
    })
    */
    let handleChange = (e) => {
      let stepRate = 1 / props.step
      let value = Number(e.target ? e.target.value : e)
      if (isNaN(value)) {
        e.target.value = props.modelValue
      } else {
        if (typeof props.max === 'number' && value > props.max) {
          value = props.max
        }
        if (typeof props.min === 'number' && value < props.min) {
          value = props.min
        }
        value = Math.round(value * stepRate) / stepRate
        context.emit('input', value)
        context.emit('change', value)
        context.emit('update:modelValue', value)
      }
    }
    return {
      handleChange
    }
  }
}
</script>
