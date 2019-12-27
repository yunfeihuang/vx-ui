<template functional>
  <div :class="['vx-heading', `vx-heading--${props.type}`, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <div class="vx-heading--inner">
      <slot name="prepend"></slot>
      <div class="vx-heading--title">
        <slot></slot>
      </div>
      <slot name="append"></slot>
    </div>
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
