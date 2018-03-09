<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
    <div :class="[$cssPrefix+'tab-underline']"></div>
  </div>
</template>

<script>
import { tab } from 'utils/mixins.js'
export default {
  componentName: 'Tab',
  mixins: [tab],
  props: ['underlineWidth'],
  computed: {
    classes () {
      return [this.$cssPrefix + 'flexbox', this.$cssPrefix + 'tab']
    }
  },
  updated () {
    this.computedStyle()
  },
  methods: {
    afterMounted () {
      this.computedStyle()
    },
    computedStyle () {
      this.$nextTick(() => {
        let node = this.$el.querySelector('.' + this.$cssPrefix + 'tab-underline')
        let activeNode = this.$el.querySelector('.' + this.$cssPrefix + 'tab-item-active')
        if (activeNode) {
          let activeWidth = activeNode.offsetWidth
          let width = activeWidth
          let left = activeNode.offsetLeft
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
