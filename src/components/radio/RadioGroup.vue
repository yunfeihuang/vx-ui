<template>
  <div :class="['vx-radio-group', {'is-divider': divider, 'is-disabled': disabled}]">
    <slot></slot>
  </div>
</template>

<script>
import { input } from '@/utils/mixins'

export default {
  name: 'VxRadioGroup',
  props: {
    ...input.props,
    divider: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleChange (value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>
