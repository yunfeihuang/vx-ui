<template>
  <div ref="el" :class="['vx-swipeout', {'is-divider': divider}]"
    onselectstart="return false;"
    @touchstart="handleTouchStart">
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
      e.stopPropagation()
      e.preventDefault()
      let pageX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX
      let maxTranslateX = -actionNode.offsetWidth + currentTranslateX
      document.ontouchmove = e => {
        e.stopPropagation()
        e.preventDefault()
        let _pageX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX
        let x = currentTranslateX + (_pageX - pageX)
        if (x < maxTranslateX) {
          x = maxTranslateX
        } else if (x > 0) {
          x = 0
        }
        setTranslateX(x, false)
      }
      document.body.ontouchend = e => {
        e.stopPropagation()
        e.preventDefault()
        let __pageX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX
        document.body.ontouchmove = null
        if (__pageX === pageX) {
          emit('click', e)
        } else {
          currentTranslateX = __pageX - pageX < -40 ? -actionNode.offsetWidth : 0
          setTranslateX(currentTranslateX)  
        }
      }
    }
    const handleResize = () => {
      props.open && setTranslateX(-actionNode.offsetWidth)
    }
    const handleAction = e => {
      this.setTranslateX(0, 0)
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
        setTranslateX(val ? -actionNode.offsetWidth : 0)
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
