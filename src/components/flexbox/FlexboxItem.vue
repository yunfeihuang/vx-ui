<template>
  <component class="vx-flexbox--item" :style="styles" :is="tag">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'VxFlexboxItem',
  props: {
    flex: {
      type: [String, Number],
      default: 1
    },
    order: {
      type: Number
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    styles () {
      let gutter = typeof this.$parent.gutter === 'number' ? (this.$parent.gutter + 'px') : this.$parent.gutter
      return `
        margin-left: ${gutter};
        margin-right: ${gutter};
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
