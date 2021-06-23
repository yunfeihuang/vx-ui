<template>
  <div 
    class="vx-ripple"
    onselectstart="return false;"
    @touchstart="handleTouchStart"
    @mousedown="handleTouchStart"
    @touchend="handleTouchEnd"
    @mouseup="handleTouchEnd">
    <slot></slot>
    <transition
      v-for="item in shadows"
      :key="item.id"
      @enter="handleEnter"
      @leave="handleLeave"
      :css="false">
      <div class="vx-ripple--shadow" v-if="item.show" :style="item.style"></div>
    </transition>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue'
export default {
  name: 'VxRipple',
  props: {
    color: {
      type: String
    },
    position: {
      type: String
    }
  },
  setup (props) {
    const shadows = ref([])
    let rect = null
    let id = new Date().getTime()
    const handleTouchStart = ({pageY, pageX, changedTouches, currentTarget}) => {
      id = new Date().getTime()
      rect = currentTarget.getBoundingClientRect()
      const shadow = {
        show: false,
        id,
        style: props.position === 'center' ? {
          top: '50%',
          left: '50%',
          backgroundColor: props.color
        } : {
          top: (changedTouches ? changedTouches[0].pageY : pageY) - rect.top + 'px',
          left: (changedTouches ? changedTouches[0].pageX : pageX) - rect.left + 'px',
          backgroundColor: props.color
        }
      }
      shadows.value.push(shadow)
      nextTick(() => {
        const item = shadows.value.find(item => item.id === shadow.id)
        item.show = true
      })
    }
    const handleTouchEnd = () => {
      const item = shadows.value.find(item => item.id === id)
      item.show = false
    }
    return {
      shadows,
      handleTouchStart,
      handleTouchEnd,
      handleEnter (el, done) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.transform = `scale(${Math.max(rect.width * 1.5, rect.height * 1.5) / 10})`
            setTimeout(done, 300)
          })
        })
      },
      handleLeave (el, done) {
        requestAnimationFrame(() => {
          el.style.opacity = 0
          setTimeout(done, 300)
        })
      }
    }
  }
}
</script>
