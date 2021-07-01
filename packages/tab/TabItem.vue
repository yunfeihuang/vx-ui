<template>
  <div
    :style="{
      'min-width': minTabItemWidth
    }"
    :class="[
      'vx-tab--item',
      {
        'is-flexbox-item': layout=='default',
        'is-active': active === name
      }
    ]"
    @click="handleChange(name)">
    <span v-if="underlineWidth" class="vx-tab--item-text">
      <slot></slot>
    </span>
    <slot v-else></slot>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'VxTabItem',
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  },
  setup () {
    const vxTab = inject('vxTab')
    return {
      active: vxTab.active,
      underlineWidth: vxTab.underlineWidth,
      layout: vxTab.layout,
      minTabItemWidth: vxTab.minTabItemWidth,
      handleChange: vxTab.handleChange
    }
  }
}
</script>
