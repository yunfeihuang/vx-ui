<template functional>
  <div :class="['vx-page--body', {'vx-scroller': props.scroller}, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'PageBody',
  props: {
    scroller: {
      type: Boolean,
      default: true
    }
  }
}
</script>
