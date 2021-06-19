<template>
  <div :class="['vx-tab',`vx-tab--type-${layout}`]" onselectstart="return false;" ref="el">
    <div class="vx-tab--scroller">
      <div :class="[{'is-flexbox': layout=='default'}, 'vx-tab--inner']">
        <slot></slot>
      </div>
      <div class="vx-tab--underline"></div>
    </div>
  </div>
</template>

<script>
import { ref, provide, watch, nextTick, onMounted } from 'vue'
export default {
  name: 'VxTab',
  props: {
    active: {
      type: [Number, String, Object],
      required: true
    },
    layout: {
      type: String,
      default: 'default'
    },
    underlineWidth: {},
    minTabItemWidth: {}
  },
  setup (props, { emit }) {
    const el = ref(null)
    const active = ref(props.active)
    const layout = ref(props.layout)
    watch(() => props.layout, val => {
      layout.value = val
    })
    const underlineWidth = ref(props.underlineWidth)
    watch(() => props.underlineWidth, val => {
      underlineWidth.value = val
    })
    const minTabItemWidth = ref(props.minTabItemWidth)
    watch(() => props.minTabItemWidth, val => {
      minTabItemWidth.value = val
    })
    const updateStyle = () => {
      nextTick(() => {
        let node = el.value.querySelector('.vx-tab--underline')
        let scrollerNode = el.value.querySelector('.vx-tab--scroller')
        let innerNode = el.value.querySelector('.vx-tab--inner')
        let activeNode = el.value.querySelector('.is-active')
        if (activeNode) {
          let activeWidth = activeNode.offsetWidth
          let width = activeWidth
          let left = activeNode.offsetLeft
          if (underlineWidth.value === 'auto' || underlineWidth.value === 0) {
            width = activeNode.children[0].offsetWidth
            if (width > activeWidth) {
              width = activeWidth
            }
            left = activeNode.offsetLeft + (activeWidth - width) / 2
          } else if (underlineWidth.value) {
            width = underlineWidth.value
            left = activeNode.offsetLeft + (activeWidth - underlineWidth.value) / 2
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
    }
    watch(() => props.active, val => {
      active.value = val
      updateStyle()
      layout.value === 'scroll' && nextTick(() => {
        let target = el.value.querySelector('.is-active')
        let node = el.value.querySelector('.vx-tab--scroller')
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
    })
    onMounted(() => {
      updateStyle()
    })
    provide('vxTab', {
      active,
      layout,
      minTabItemWidth,
      underlineWidth,
      handleChange (value) {
        emit('update:active', value)
        updateStyle()
      }
    })
    return {
      el
    }
  }
}
</script>
