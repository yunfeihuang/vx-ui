<template>
  <div :style="styles">
    <div
      :style="`
        padding-left: ${$parent.gutter / 2}px;
        padding-right: ${$parent.gutter / 2}px;
      `">
      <slot></slot>
    </div>
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
    width: {
      type: String
    }
  },
  computed: {
    styles () {
      if (this.width) {
        return `
          width: ${this.width};
        `
      } else {
        return `
          -ms-flex: ${this.flex};
          -webkit-box-flex: ${this.flex};
          -moz-box-flex: ${this.flex};
          -webkit-flex: ${this.flex};
          -moz-flex: ${this.flex};
          flex: ${this.flex};
          min-width: 0;
        `
      }
    }
  }
}
</script>
