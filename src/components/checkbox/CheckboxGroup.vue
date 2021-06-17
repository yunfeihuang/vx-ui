<template>
  <div :class="['vx-checkbox-group', {'is-divider': divider && !inline, 'is-disabled': disabled}]">
    <slot></slot>
  </div>
</template>

<script>
import { input } from '@/utils/mixins'
import { provide, ref, watch } from 'vue'

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
    }
  },
  setup (props, context) {
    let max = ref(props.max)
    let modelValue = ref(props.modelValue)
    let iconStyle = ref(props.iconStyle)
    let iconPosition = ref(props.iconPosition)
    let inline = ref(props.inline)
    watch(() => props.max, val => {
      max.value = val
    })
    watch(() => props.modelValue, val => {
      modelValue.value = val
    })
    watch(() => props.iconStyle, val => {
      iconStyle.value = val
    })
    watch(() => props.iconPosition, val => {
      iconPosition.value = val
    })
    watch(() => props.inline, val => {
      inline.value = val
    })
    provide('vxCheckboxGroup', {
      max,
      modelValue,
      iconStyle,
      inline,
      iconPosition,
      handleChange (e, checkbox) {
        let checked = e.target.checked
        if (props.max === 1) {
          let value = props.modelValue instanceof Array ? [checkbox.value] :checkbox.value
          context.emit('update:modelValue', value)
        } else {
          if (checked && props.max !== 0 && props.modelValue && props.modelValue.length === props.max) {
            e.target.checked = false
          } else {
            let value = Object.assign([], props.modelValue)
            if (checked) {
              if (checkbox.exclusive) {
                value = checkbox.value === undefined ? [] : [checkbox.value] 
              } else {
                value.indexOf(checkbox.value) === -1 && value.push(checkbox.value)
              }
            } else {
              value && value.indexOf && value.splice(value.indexOf(checkbox.value), 1)
            }
            context.emit('update:modelValue', value)
          }
        }
      }
    })
  }
}
</script>

