<template>
  <div :class="['vx-switch--wrapper', `vx-switch--size-${size}`, {'is-disabled': disabled, 'vx-switch--small': small}]">
    <input
      :name="name"
      :checked="onValue == modelValue"
      type="checkbox"
      @change="handleChange($event)"
      />
    <button type="button" tabindex="-2"></button>
  </div>
</template>

<script>
import { input } from '@/utils/mixins'
export default {
  name: 'VxSwitch',
  props: {
    ...input.props,
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    onValue: {
      default: true
    },
    offValue: {
      default: false
    },
    small: {
      type: Boolean
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  setup (props, { emit }) {
    return {
      handleChange (e) {
        emit('update:modelValue', e.target.checked ? props.onValue : props.offValue)
      }
    }
  }
}
</script>
