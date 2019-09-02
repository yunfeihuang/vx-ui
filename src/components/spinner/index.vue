<template functional>
  <div
    :class="['vx-spinner--wrapper', data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
      <div
        class="vx-spinner"
        :style="`border-top-color: ${props.primaryColor};
          border-right-color: ${props.color};
          border-bottom-color: ${props.color}
          border-left-color: ${props.color}`"></div>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  componentName: 'Spinner',
  props: {
    color: {
      type: String,
      default: ''
    },
    primaryColor: {
      type: String,
      default: ''
    }
  }
}
</script>
