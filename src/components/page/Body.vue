<template functional>
  <flexbox-item :class="['vx-body', {'vx-scroller': props.scroller}, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <slot></slot>
  </flexbox-item>
</template>

<script>
export default {
  componentName: 'XBody',
  props: {
    scroller: {
      type: Boolean,
      default: true
    }
  }
}
</script>
