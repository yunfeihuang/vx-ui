<template>
  <div :style="styles">
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
    },
    width: {
      type: String
    }
  },
  computed: {
    styles () {
      if (this.$parent && this.$parent.$children) {
        let isFirstChild = this === this.$parent.$children[0]
        let gutter = typeof this.$parent.gutter === 'number' ? (this.$parent.gutter + 'px') : this.$parent.gutter
        if (isFirstChild && this.$parent.wrap !== 'wrap') {
          gutter = ''
        }
        
        if (this.width) {
          return `
            margin-left: ${gutter};
            width: ${this.width};
          `
        } else {
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
      return ''
    }
  }
}
</script>
