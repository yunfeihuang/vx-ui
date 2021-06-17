<template>
  <div :class="['vx-button-tab', `vx-button-tab--size-${size}`]" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { provide, ref, watch } from 'vue'
export default {
  name: 'VxButtonTab',
  props: {
    active: {
      type: [Number, String, Object],
      required: true
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  setup (props, { emit }) {
    let active = ref(props.active)
    watch(() => props.active, val => {
      active.value = val
    })
    provide('vxButtonTab', {
      active,
      handleChange (value) {
        if (value !== props.active) {
          emit('update:active', value)
        }
      }
    })
  }
}
</script>
