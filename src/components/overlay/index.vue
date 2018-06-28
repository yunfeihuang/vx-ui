<template functional>
  <div :class="['vx-overlay', data.staticClass, data.class]"
    :style="Object.assign({opacity:`${props.opacity}`}, data.style)"
    v-bind="data.attrs"
    v-on="listeners">
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

