<template>
  <component class="vx-flexbox--item" :style="`
        margin-left: ${gutter}px;
        margin-right: ${gutter}px;
        -ms-flex: ${flex};
        -webkit-box-flex: ${flex};
        -moz-box-flex: ${flex};
        -webkit-flex: ${flex};
        -moz-flex: ${flex};
        flex: ${flex};
        min-width: 0;
        order:${order}
      `" :is="tag">
    <slot></slot>
  </component>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'VxFlexboxItem',
  props: {
    flex: {
      type: [String, Number],
      default: 1
    },
    order: {
      type: Number
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup () {
    return {
      gutter: inject('vxFlexbox') ? inject('vxFlexbox').gutter : 8
    }
  }
}
</script>
