<template>
  <component :is="tag">
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
    tag: {
      type: String,
      default: 'div'
    }
  },
  mounted () {
    this.init()
    window.addEventListener('resize', this.init, false)
  },
  destroyed () {
    window.removeEventListener('resize', this.init)
  },
  methods: {
    init () {
      let fontSize = document.documentElement.style.fontSize
      let width = ''
      let height = ''
      if (fontSize) {
        fontSize = parseInt(fontSize)
        if (this.width) {
          width = Math.round(fontSize * this.width)
        }
        if (this.height) {
          height = Math.round(fontSize * this.height)
        }
      }
      requestAnimationFrame(() => {
        this.$el.style.cssText = `width:${width}px;height:${height}px`
      })
    }
  }
}
</script>
