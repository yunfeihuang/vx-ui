<template>
  <div :class="['vx-flexbox', 'vx-tab']" onselectstart="return false;">
    <slot></slot>
    <div class="vx-tab-underline"></div>
  </div>
</template>

<script>
import { tab } from 'utils/mixins'
export default {
  componentName: 'Tab',
  mixins: [tab],
  props: ['underlineWidth'],
  updated () {
    this.computedStyle()
  },
  destroyed () {
    window.removeEventListener('resize', this.$computedStyle)
  },
  methods: {
    afterMounted () {
      this.computedStyle()
      this.$computedStyle = this.computedStyle.bind(this)
      window.addEventListener('resize', this.$computedStyle)
    },
    computedStyle () {
      this.$nextTick(() => {
        let node = this.$el.querySelector('.vx-tab-underline')
        let activeNode = this.$el.querySelector('.is-active')
        if (activeNode) {
          let activeWidth = activeNode.offsetWidth
          let width = activeWidth
          let left = activeNode.offsetLeft
          console.log(activeWidth, left)
          if (this.underlineWidth === 'auto' || this.underlineWidth === 0) {
            width = activeNode.children[0].offsetWidth
            left = activeNode.offsetLeft + (activeWidth - width) / 2
          } else if (this.underlineWidth) {
            width = this.underlineWidth
            left = activeNode.offsetLeft + (activeWidth - this.underlineWidth) / 2
          }
          requestAnimationFrame(() => {
            node.style.cssText = `width: ${width}px;left:${left}px;display:block`
          })
        }
      })
    },
    handleChange (value) {
      if (value !== this.active) {
        this.$emit('update:active', value).$emit('change', value)
        this.computedStyle()
      }
    }
  }
}
</script>
