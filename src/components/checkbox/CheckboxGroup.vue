<template>
  <div :class="['vx-checkbox-group', {'is-divider': divider && !inline, 'is-disabled': disabled}]">
    <slot></slot>
  </div>
</template>

<script>
import { input } from '@/utils/mixins'

export default {
  name: 'VxCheckboxGroup',
  props: {
    ...input.props,
    modelValue: {
      type: [String, Number, Array]
    },
    divider: {
      type: Boolean,
      default: true
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    max: {
      type: Number,
      default: 0
    },
    iconStyle: {
      type: String
    },
    inline: {
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

