<template>
  <div class="vx-ripple" onselectstart="return false;" ref="el" @mousedown="handleTouchStart">
    <slot></slot>
    <transition
      :duration="3000"
      v-for="(item,index) in shadows"
      :key="index"
      @enter="handleEnter"
      @after-enter="handleAfterEnter($event, item.id)"
      :css="false">
      <div class="vx-ripple--shadow" v-show="item.show" :style="item.style"></div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue'
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
    const el = ref(null)
    const shadows = ref([])
    let rect = null
    const handleTouchStart = ({pageY, pageX, changedTouches}) => {
      rect = el.value.getBoundingClientRect()
      const shadow = {
        show: false,
        id: new Date().getTime().toString(),
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
      requestAnimationFrame(() => {
        const item = shadows.value.find(item => item.id === shadow.id)
        item.show = true
      })
    }
    return {
      el,
      shadows,
      handleTouchStart,
      handleEnter (el, done) {
        requestAnimationFrame(() => {
          el.style.transform = `scale(${Math.max(rect.width, rect.height) / 10})`
          el.style.opacity = 0
          setTimeout(done, 400)
        })
      },
      handleAfterEnter (el, id) {
        shadows.value.forEach((item) => {
          if (item.id === id) {
            item.show = false
          }
        })
      }
    }
  }
}
</script>
