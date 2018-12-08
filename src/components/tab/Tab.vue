<template>
  <div :class="['vx-tab',`vx-tab--type-${layout}`]" onselectstart="return false;">
    <div class="vx-tab--scroller">
      <div :class="[{'vx-flexbox': layout=='default'}, 'vx-tab--inner']">
        <slot></slot>
      </div>
      <div class="vx-tab--underline"></div>
    </div>
  </div>
</template>

<script>
import { tab } from 'utils/mixins'
export default {
  componentName: 'Tab',
  mixins: [tab],
  props: ['underlineWidth'],
  mounted () {
    this.computedStyle()
    window.addEventListener('resize', this.computedStyle)
  },
  updated () {
    this.computedStyle()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.$computedStyle)
  },
  methods: {
    computedStyle () {
      this.$nextTick(() => {
        let node = this.$el.querySelector('.vx-tab--underline')
        let activeNode = this.$el.querySelector('.is-active')
        if (activeNode) {
          let activeWidth = activeNode.offsetWidth
          let width = activeWidth
          let left = activeNode.offsetLeft
          if (this.underlineWidth === 'auto' || this.underlineWidth === 0) {
            width = activeNode.children[0].offsetWidth
            if (width > activeWidth) {
              width = activeWidth
            }
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
    change (value) {
      if (value !== this.active) {
        this.$emit('update:active', value).$emit('change', value)
        this.computedStyle()
      }
      this.layout === 'scroll' && this.$nextTick(() => {
        let target = this.$el.querySelector('.is-active')
        let node = this.$el.querySelector('.vx-tab--scroller')
        requestAnimationFrame(() => {
          let width = target.offsetWidth
          let innerWidth = window.innerWidth
          let rect = target.getBoundingClientRect()
          let offsetLeft = target.nextElementSibling ? target.nextElementSibling.offsetLeft : 0
          if (rect.right + width > innerWidth && target.nextElementSibling) {
            requestAnimationFrame(() => {
              node.scrollLeft = offsetLeft + target.nextElementSibling.offsetWidth - innerWidth
            })
          }
        })
      })
    }
  }
}
</script>
