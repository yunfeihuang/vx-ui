<template>
  <div ref="el" :class="['vx-swipeout', {'is-divider': divider}]"
    onselectstart="return false;"
    @touchstart="handleTouchStart"
    @mousedown="handleTouchStart">
    <div class="vx-swipeout--inner">
      <div class="vx-swipeout--content">
        <slot></slot>
      </div>
      <div class="vx-swipeout--action" @click="handleAction">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, watch } from 'vue'
export default {
  name: 'VxSwipeout',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    divider: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { emit }) {
    const el = ref(null)
    let innerNode = null
    let actionNode = null
    let currentTranslateX = 0
    const setTranslateX = (x, transition = true) => {
      innerNode.style.webkitTransition = innerNode.style.transition = transition ? '' : 'none'
      innerNode.style.webkitTransform = innerNode.style.transform = 'translate3d(' + x + 'px, 0, 0)'
    }
    const handleTouchStart = e => {
      let pageX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX
      let maxTranslateX = currentTranslateX === 0 ? -actionNode.offsetWidth + currentTranslateX : -actionNode.offsetWidth 
      const handleTouchMove = e => {
        let _pageX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX
        let x = currentTranslateX + (_pageX - pageX)
        if (x < maxTranslateX) {
          x = maxTranslateX
        } else if (x > 0) {
          x = 0
        }
        setTranslateX(x, false)
      }
      const handleTouchEnd = e => {
        let __pageX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX
        document.removeEventListener(e.changedTouches ? 'touchmove': 'mousemove', handleTouchMove, false)
        if (__pageX === pageX) {
          emit('click', e)
        } else {
          currentTranslateX = __pageX - pageX < -40 ? -actionNode.offsetWidth : 0
          setTranslateX(currentTranslateX)  
        }
      }
      document.addEventListener(e.changedTouches ? 'touchmove': 'mousemove', handleTouchMove, false)
      document.addEventListener(e.changedTouches ? 'touchend': 'mouseup', handleTouchEnd, {
        once: true
      })
    }
    const handleResize = () => {
      if (props.open) {
        currentTranslateX = -actionNode.offsetWidth
        setTranslateX(currentTranslateX)
      }
    }
    const handleAction = e => {
      currentTranslateX = 0
      setTranslateX(currentTranslateX)
      emit('close', e)
    }
    onMounted(() => {
      innerNode = el.value.querySelector('.vx-swipeout--inner')
      actionNode = el.value.querySelector('.vx-swipeout--action')
      handleResize()
      window.addEventListener('resize', handleResize, false)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize, false)
    })
    watch(() => props.open, val => {
      if (actionNode) {
        currentTranslateX = val ? -actionNode.offsetWidth : 0
        setTranslateX(currentTranslateX)
      }
    })
    return {
      el,
      handleTouchStart,
      handleAction
    }
  }
}
</script>
