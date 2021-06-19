<template>
  <component :is="$attrs.to ? 'router-link' : 'div'" tag="div" v-bind="$attrs" v-on="$attrs"
    :class="['vx-grid--item', {'is-divider': gutter == 1}]"
    :style="{
      width: `${100 / _col * col}%`,
      borderRightWidth: `${gutter}px`,
      borderBottomWidth: `${gutter}px`
    }">
    <div class="vx-grid--item-inner">
      <slot></slot>
    </div>
  </component>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'VxGridItem',
  props: {
    to: {
      type: [String, Object]
    },
    col: {
      type: Number,
      default: 1
    }
  },
  setup () {
    return {
      gutter: inject('vxGrid') ? inject('vxGrid').gutter : 8,
      _col: inject('vxGrid') ? inject('vxGrid').col : 2
    }
  }
}
</script>
