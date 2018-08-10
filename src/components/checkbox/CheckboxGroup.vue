<template>
  <div :class="['vx-checkbox-group', {'vx-checkbox-group-divider': divider && !inline, 'is-disabled': disabled}]">
    <slot></slot>
  </div>
</template>

<script>
import { input } from 'utils/mixins'
import Checkbox from './Checkbox'

export default {
  componentName: 'CheckboxGroup',
  mixins: [input],
  components: {
    Checkbox
  },
  props: {
    ...input.props,
    value: {
      default: []
    },
    divider: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'normal'
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
    }
  },
  methods: {
    handleChange (e) {
      if (this.max === 1) {
        this.$emit('input', [e.target.value]).$emit('change', [e.target.value])
        this.eDispatch('ElFormItem', 'el.form.blur', [[e.target.value]])
        this.eDispatch('ElFormItem', 'el.form.change', [[e.target.value]])
      } else {
        if (e.target.checked && this.max !== 0 && this.value.length === this.max) {
          e.target.checked = false
        } else {
          let value = Object.assign([], this.value)
          if (e.target.checked) {
            value && value.indexOf && value.indexOf(e.target.value) === -1 && value.push(e.target.value)
          } else {
            value && value.indexOf && value.splice(value.indexOf(e.target.value), 1)
          }
          this.$emit('input', value).$emit('change', value)
          this.eDispatch('ElFormItem', 'el.form.blur', [value])
          this.eDispatch('ElFormItem', 'el.form.change', [value])
        }
      }
    }
  }
}
</script>

