<template>
  <div :class="['vx-checkbox-group', {'is-divider': divider && !inline, 'is-disabled': disabled}]">
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
      type: [String, Number, Array]
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
    handleChange (e, $value, exclusive) {
      if (this.max === 1) {
        let _value = this.value instanceof Array ? [$value] : $value
        this.$emit('input', _value).$emit('change', _value)
        this.eDispatch('ElFormItem', 'el.form.blur', [_value])
        this.eDispatch('ElFormItem', 'el.form.change', [_value])
      } else {
        if (e.target.checked && this.max !== 0 && this.value.length === this.max) {
          e.target.checked = false
        } else {
          let value = Object.assign([], this.value)
          if (e.target.checked) {
            if (exclusive) {
              value = [$value]
            } else {
              value.indexOf($value) === -1 && value.push($value)
              let exclusiveValue = []
              if (this.$children && this.$children.forEach) {
                this.$children.forEach(item => {
                  item.$props.exclusive && exclusiveValue.push(item.value)
                })
                if (exclusiveValue.length > 0) {
                  value = value.filter(item => exclusiveValue.indexOf(item) === -1)
                }
              }
            }
          } else {
            value && value.indexOf && value.splice(value.indexOf($value), 1)
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

