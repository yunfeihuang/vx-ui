<template>
  <div :class="['vx-checker-group',{'is-disabled': disabled}]">
    <slot></slot>
  </div>
</template>

<script>
import { input } from '@/utils/mixins'

export default {
  name: 'VxCheckerGroup',
  props: {
    ...input.props,
    modelValue: {
      type: [String, Number, Array]
    },
    max: {
      type: Number,
      default: 0
    },
    icon: {
      type: Boolean
    },
    block: {
      type: Boolean
    },
    exclusiveValue: {
      type: Array
    }
  },
  methods: {
    handleChange (e, val) {
      if (!this.exclusiveValue || !this.exclusiveValue.includes(val)) {
        if (this.max === 1) {
          let value = this.modelValue instanceof Array ? [val] :val
          this.$emit('update:modelValue', value)
        } else {
          if (e.target.checked && this.max !== 0 && this.modelValue.length === this.max) {
            e.target.checked = false
          } else {
            let value = Object.assign([], this.modelValue)
            if (e.target.checked) {
              value.indexOf(val) === -1 && value.push(val)
            } else {
              value && value.indexOf && value.splice(value.indexOf(val), 1)
            }
            this.$emit('update:modelValue', value)
          }
        }
      }
    }
  }
}
</script>
