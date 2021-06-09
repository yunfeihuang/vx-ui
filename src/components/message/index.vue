<template>
  <div :class="['vx-message', 'vx-message--' + props.type, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Message',
  componentName: 'Message',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
