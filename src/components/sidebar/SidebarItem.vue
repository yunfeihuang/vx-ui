<template>
  <div :class="['vx-sidebar--item', {'is-active': active === name}]" @click="handleChange(name)">
    <slot></slot>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'VxSidebarItem',
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  },
  setup () {
    const vxSidebar = inject('vxSidebar') || {}
    return {
      active: vxSidebar.active,
      handleChange (value) {
        vxSidebar && vxSidebar.handleChange && vxSidebar.handleChange(value)
      }
    }
  }
}
</script>
