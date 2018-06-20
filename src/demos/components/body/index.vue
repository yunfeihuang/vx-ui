<template>
  <flexbox-item :class="classes" :style="styles">
    <slot></slot>
  </flexbox-item>
</template>

<script>
export default {
  componentName: 'XBody',
  computed: {
    classes () {
      return ['vx-body', this.scroll]
    },
    styles () {
      if (this.scroll) {
        return `
          white-space: normal;
          overflow: auto;
          -webkit-overflow-scrolling: touch; 
          overflow-scrolling: touch;
        `
      } else {
        return ''
      }
    }
  },
  props: {
    scroll: {
      type: Boolean,
      default: true
    }
  }
}
</script>
