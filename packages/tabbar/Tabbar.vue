<template>
  <div :class="['vx-tabbar']" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { ref, watch, provide } from 'vue'
export default {
  name: 'VxTabbar',
  props: {
    active: {
      type: [Number, String, Object]
    },
    ripple: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    let active = ref(props.active)
    watch(() => props.active, val => {
      active.value = val
    })
    let ripple = ref(props.ripple)
    watch(() => props.ripple, val => {
      ripple.value = val
    })
    provide('vxTabbar', {
      active,
      ripple,
      handleChange (value) {
        if (value !== props.active) {
          emit('update:active', value)
        }
      }
    })
  }
}
</script>
