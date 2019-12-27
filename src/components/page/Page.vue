<template functional>
  <div :class="['vx-page', `vx-page--${props.type}`, data.staticClass, data.class]" :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style" v-bind="data.attrs" v-on="listeners">
    <div class="vx-page--flexbox">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Page',
  componentName: 'Page',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
