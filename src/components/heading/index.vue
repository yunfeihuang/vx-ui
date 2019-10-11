<template functional>
  <div :class="['vx-heading', `vx-heading--${props.type}`, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <flexbox align="center">
      <slot name="prepend"></slot>
      <flexbox-item class="vx-heading--title">
        <slot></slot>
      </flexbox-item>
      <slot name="append"></slot>
    </flexbox>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  componentName: 'Heading',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
