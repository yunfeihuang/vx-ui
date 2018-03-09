<template>
  <div :class="classes" :style="styles">
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
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'overlay']
    },
    styles () {
      return 'opacity:' + this.opacity
    }
  }
}
</script>

