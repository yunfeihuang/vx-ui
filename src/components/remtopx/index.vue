<template>
  <component :is="tag" :style="styles">
    <slot></slot>
  </component>
</template>
<script>
export default {
  componentName: 'RemToPx',
  props: {
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    even: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  data () {
    return {
      styles: this.getStyles()
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize, false)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.styles = this.getStyles()
    },
    getStyles () {
      let fontSize = document.documentElement.style.fontSize
      let width = ''
      let height = ''
      if (fontSize) {
        fontSize = parseInt(fontSize, 10)
        if (this.width) {
          width = Math.round(fontSize * this.width)
          if (this.even && width % 2) {
            width++
          }
        }
        if (this.height) {
          height = Math.round(fontSize * this.height)
          if (this.even && height % 2) {
            height++
          }
        }
      }
      return `width:${width}px;height:${height}px`
    }
  }
}
</script>
