<template>
  <div :class="['vx-tabbar--item', {'is-active':active === name, 'is-ripple': ripple}]"
    @click="handleChange(name)">
    <vx-ripple v-if="ripple" position="center">
      <slot v-bind="{active:active === name}"></slot>
    </vx-ripple>
    <slot v-else v-bind="{active: active === name}"></slot>
  </div>
</template>

<script>
import { inject } from 'vue'
import VxRipple from '../ripple'
export default {
  name: 'VxTabbarItem',
  components: {
    VxRipple
  },
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  },
  setup () {
    const vxTabbar = inject('vxTabbar') || {}
    return {
      active: vxTabbar.active,
      ripple: vxTabbar.ripple,
      handleChange (value) {
        vxTabbar && vxTabbar.handleChange && vxTabbar.handleChange(value)
      }
    }
  }
}
</script>
