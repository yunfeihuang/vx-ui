<template>
  <div :class="['vx-checker-group',{'is-disabled': disabled}]">
    <slot></slot>
  </div>
</template>

<script>
import { input } from 'utils/mixins'

export default {
  componentName: 'CheckerGroup',
  mixins: [input],
  props: {
    ...input.props,
    value: {
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
            value.splice(value.indexOf($value), 1)
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
