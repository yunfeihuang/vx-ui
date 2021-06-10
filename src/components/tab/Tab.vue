<template>
  <div :class="['vx-tab',`vx-tab--type-${layout}`]" onselectstart="return false;">
    <div class="vx-tab--scroller">
      <div :class="[{'is-flexbox': layout=='default'}, 'vx-tab--inner']">
        <slot></slot>
      </div>
      <div class="vx-tab--underline"></div>
    </div>
  </div>
</template>

<script>
import { tab } from '@/utils/mixins'
export default {
  name: 'VxTab',
  mixins: [tab],
  props: ['underlineWidth', 'minTabItemWidth'],
  mounted () {
    this.computedStyle()
    window.addEventListener('resize', this.computedStyle)
  },
  updated () {
    this.computedStyle()
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.$computedStyle)
  },
  methods: {
    computedStyle () {
      this.$nextTick(() => {
        let node = this.$el.querySelector('.vx-tab--underline')
        let scrollerNode = this.$el.querySelector('.vx-tab--scroller')
        let innerNode = this.$el.querySelector('.vx-tab--inner')
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
          let nextElement = activeNode.nextElementSibling
          let prevElement = activeNode.previousElementSibling
          requestAnimationFrame(() => {
            let prevRect = null
            let nextRect = null
            node.style.cssText = `width: ${width}px;left:${left}px;display:block`
            let scrollerNodeWidth = scrollerNode.offsetWidth
            innerNode.offsetWidth > scrollerNodeWidth && requestAnimationFrame(() => {
              if (prevElement) {
                prevRect = prevElement.getBoundingClientRect()
              }
              if (nextElement) {
                nextRect = nextElement.getBoundingClientRect()
              }
              requestAnimationFrame(() => {
                nextElement && nextRect && nextRect.left > scrollerNodeWidth - activeWidth / 2 && nextElement.scrollIntoView()
                prevElement && prevRect && prevRect.left < 0 && prevElement.scrollIntoView()
              })
            })
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
