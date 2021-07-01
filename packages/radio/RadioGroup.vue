<template>
  <div :class="['vx-radio-group', {'is-divider': divider, 'is-disabled': disabled}]">
    <slot></slot>
  </div>
</template>

<script>
import { input } from '@/utils/mixins'
import { provide, ref, watch } from 'vue'

export default {
  name: 'VxRadioGroup',
  props: {
    ...input.props,
    divider: {
      type: Boolean,
      default: true
    }
  },
  setup (props, {emit}) {
    let modelValue = ref(props.modelValue)
    watch(() => props.modelValue, val => {
      modelValue.value = val
    })
    provide('vxRadioGroup', {
      modelValue,
      handleChange (val) {
        emit('update:modelValue', val)
      }
    })
  }
}
</script>
