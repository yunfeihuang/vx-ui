<template>
  <div :class="['vx-button-tab--item', {'is-active': active === name}]" @click="handleChange(name)">
    <slot></slot>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'VxButtonTabItem',
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  },
  setup () {
    const vxButtonTab = inject('vxButtonTab') || {}
    return {
      active: vxButtonTab.active,
      handleChange (value) {
        vxButtonTab && vxButtonTab.handleChange && vxButtonTab.handleChange(value)
      }
    }
  }
}
</script>
