<template>
  <div class="vx-sidebar" onselectstart="return false;">
    <div class="vx-sidebar--inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { provide, ref, watch } from 'vue'
export default {
  name: 'VxSidebar',
  props: {
    active: {
      type: [Number, String, Object]
    }
  },
  setup (props, { emit }) {
    let active = ref(props.active)
    watch(() => props.active, val => {
      active.value = val
    })
    provide('vxSidebar', {
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
