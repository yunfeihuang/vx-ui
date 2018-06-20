<template>
  <div class="vx-flexbox-item" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'FlexboxItem',
  props: {
    flex: {
      type: [String, Number],
      default: 1
    },
    order: {
      type: Number
    }
  },
  computed: {
    styles () {
      let gutter = typeof this.$parent.gutter === 'number' ? (this.$parent.gutter + 'px') : this.$parent.gutter
      return `
        margin-left: ${gutter};
        -ms-flex: ${this.flex};
        -webkit-box-flex: ${this.flex};
        -moz-box-flex: ${this.flex};
        -webkit-flex: ${this.flex};
        -moz-flex: ${this.flex};
        flex: ${this.flex};
        min-width: 0;
        order:${this.order}
      `
    }
  }
}
</script>
