<template functional>
  <div :class="['vx-divider', {'is-vertical': props.vertical}, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Divider',
  componentName: 'Divider',
  props: {
    vertical: {
      type: Boolean
    }
  }
}
</script>
