<template>
  <component :is="tag" :style="style">
    <slot></slot>
  </component>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue'
export default {
  name: 'RemToPx',
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
  setup (props) {
    const style = ref('')
    const getStyle = () => {
      let fontSize = document.documentElement.style.fontSize
      let width = ''
      let height = ''
      if (fontSize) {
        fontSize = parseInt(fontSize, 10)
        if (props.width) {
          width = Math.round(fontSize * props.width)
          if (props.even && width % 2) {
            width++
          }
        }
        if (props.height) {
          height = Math.round(fontSize * props.height)
          if (props.even && height % 2) {
            height++
          }
        }
      }
      return `width:${width}px;height:${height}px`
    }
    const handleResize = () => {
      style.value = getStyle()
    }
    onMounted(() => {
      window.addEventListener('resize', handleResize, false)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize, false)
    })
    return {
      style
    }
  }
}
</script>
