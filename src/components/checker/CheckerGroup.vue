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
      type: [Array, String],
      default () {
        return []
      }
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
    handleChange (e, exclusive) {
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
            if (exclusive) {
              value = [e.target.value]
            } else {
              value.indexOf(e.target.value) === -1 && value.push(e.target.value)
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
            value.splice(value.indexOf(e.target.value), 1)
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
