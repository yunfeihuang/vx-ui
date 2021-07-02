<template>
  <div :class="['vx-checker-group',{'is-disabled': disabled}]">
    <slot></slot>
  </div>
</template>

<script>
import { input } from '@/utils/mixins'
import { provide, ref, watch } from 'vue'

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
    inline: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { emit }) {
    const max = ref(props.max)
    const modelValue = ref(props.modelValue)
    const icon = ref(props.icon)
    const inline = ref(props.inline)
    const exclusives = []
    watch(() => props.max, val => {
      max.value = val
    })
    watch(() => props.modelValue, val => {
      modelValue.value = val
    })
    watch(() => props.icon, val => {
      icon.value = val
    })
    watch(() => props.inline, val => {
      inline.value = val
    })
    provide('vxCheckerGroup', {
      max,
      modelValue,
      icon,
      inline,
      exclusives,
      handleChange (e, checkbox) {
        let checked = e.target.checked
        if (props.max === 1) {
          let value = props.modelValue instanceof Array ? [checkbox.value] :checkbox.value
          emit('update:modelValue', value)
        } else {
          if (checked && props.max !== 0 && props.modelValue && props.modelValue.length === props.max) {
            e.target.checked = false
          } else {
            let value = Object.assign([], props.modelValue)
            if (checked) {
              if (checkbox.exclusive) {
                value = checkbox.value === undefined ? [] : [checkbox.value] 
              } else {
                if (exclusives.length) {
                  value = value.filter(item => exclusives.indexOf(item) === -1)
                }
                value.indexOf(checkbox.value) === -1 && value.push(checkbox.value)
              }
            } else {
              value && value.indexOf && value.splice(value.indexOf(checkbox.value), 1)
            }
            emit('update:modelValue', value)
          }
        }
      }
    })
  }
}
</script>
