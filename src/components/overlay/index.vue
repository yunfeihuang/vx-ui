<template functional>
  <div :class="['vx-overlay', data.class, data.staticClass]" :style="`opacity:${props.opacity}`" v-bind="data.attrs" v-on="listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Overlay',
  props: {
    opacity: {
      type: Number,
      default: 0.35
    }
  }
}
</script>

