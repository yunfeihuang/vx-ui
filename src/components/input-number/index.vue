<template>
  <div class="vx-input-number" :disabled="disabled">
    <button type="button" @click="handleChange(value-buttonStep)"><icon>&#xe729;</icon></button>
    <input
      v-bind="$props"
      type="number"
      :value="myValue"
      @blur="handleChange"
      @focus="handleFocus" />
    <button type="button" @click="handleChange(value+buttonStep)"><icon>&#xe727;</icon></button>
  </div>
</template>

<script>
import { input } from 'utils/mixins.js'
import Icon from '../icon'
export default {
  componentName: 'InputNumber',
  components: {
    Icon
  },
  mixins: [input],
  props: {
    value: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    buttonStep: {
      type: Number,
      default: 1
    }
  },
  computed: {
    myValue () {
      if (this.value < this.min) {
        return Math.round(this.min * this.stepRate) / this.stepRate
      }
      if (this.value > this.max) {
        return Math.round(this.max * this.stepRate) / this.stepRate
      }
      return Math.round(this.value * this.stepRate) / this.stepRate
    },
    stepRate () {
      return 1 / this.step
    }
  },
  methods: {
    handleChange (e) {
      let value = Number(e.target ? e.target.value : e)
      let node = this.$el.querySelector('input')
      if (isNaN(value)) {
        node && (node.value = this.value)
      } else {
        if (typeof this.max === 'number' && value > this.max) {
          value = this.max
        }
        if (typeof this.min === 'number' && value < this.min) {
          value = this.min
        }
        value = Math.round(value * this.stepRate) / this.stepRate
        node && (node.value = value)
        this.$emit('input', value).$emit('change', value).$emit('blur')
      }
    }
  }
}
</script>
