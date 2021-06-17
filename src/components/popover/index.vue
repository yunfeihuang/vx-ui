<template>
  <div class="vx-popover" @click="handleClick">
    <slot name="trigger"></slot>
  </div>
  <teleport to="body">
    <vx-popup
      :class="popoverClass"
      v-model:open="myOpen"
      :history="histroy"
      :opacity="overlayOpacity"
      @close="handleClose">
      <template v-slot:inner>
        <div class="vx-popover--content" ref="popoverContent" @click="handleClose">
          <slot></slot>
        </div>
      </template>
    </vx-popup>
  </teleport>
</template>

<script>
import {nextTick, ref, watch} from 'vue'
import VxPopup from '../popup'
export default {
  name: 'VxPopover',
  components: {
    VxPopup
  },
  props: {
    open: {
      type: Boolean
    },
    histroy: {
      type: Boolean,
      default: true
    },
    overlayOpacity: {
      type: Number
    },
    popoverClass: {
      type: String
    }
  },
  setup (props, { emit }) {
    const popoverContent = ref(null)
    const myOpen = ref(props.open)
    watch(() => props.open, val => {
      myOpen.value = val
    })
    return {
      popoverContent,
      myOpen,
      handleClick (e) {
        myOpen.value = true
        nextTick(() => {
          let width = window.innerWidth
          let height = window.innerHeight
          let node = popoverContent.value
          let rect = e.currentTarget.getBoundingClientRect()
          let left = rect.left + 'px'
          let right = 'auto'
          if (rect.left > width / 2) {
            left = 'auto'
            right = width - rect.right + 'px'
          }
          let top = rect.bottom + 'px'
          let bottom = 'auto'
          if (rect.top > height / 2) {
            top = 'auto'
            bottom = height - rect.top + 'px'
          }
          requestAnimationFrame(() => {
            node.style.cssText = `top:${top};left:${left};right:${right};bottom:${bottom};opacity:1`
            left === 'auto' && node.classList.add('vx-popover--content-right')
            top === 'auto' && node.classList.add('vx-popover--content-bottom')
          })
        })
      },
      handleClose () {
        myOpen.value = false
        emit('update:open', false)
      }
    }
  }
}
</script>
