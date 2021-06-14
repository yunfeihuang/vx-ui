<template>
  <div class="vx-popover" @click="handleClick">
    <slot name="trigger"></slot>
  </div>
  <teleport to="body">
    <vx-popup
      :class="popoverClass"
      v-model:open="open"
      :history="histroy"
      :opacity="overlayOpacity"
      @close="open = false">
      <template v-slot:inner>
        <div class="vx-popover--content" ref="popoverContent">
          <slot></slot>
        </div>
      </template>
    </vx-popup>
  </teleport>
</template>

<script>
import {createApp} from 'vue'
import VxPopup from '../popup'
export default {
  name: 'VxPopover',
  props: {
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
  data () {
    return {
      open: false
    }
  },
  methods: {
    handleClick (e) {
      this.open = true
      this.$nextTick(() => {
        if (this.$refs.popoverContent) {
          let width = window.innerWidth
          let height = window.innerHeight
          let node = this.$refs.popoverContent
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
        }
      })
    },
    handleClick1 () {
      let popover = this
      let node = document.createElement('div')
      document.body.appendChild(node)
      /* eslint-disable no-new */
      this.$$popover = createApp({
        el: node,
        render (createElement) {
          return createElement(VxPopup, {
            props: {
              open: this.open,
              histroy: this.histroy,
              opacity: this.opacity
            },
            style: {
              zIndex: 1000
            },
            on: {
              'close': this.handleClose,
              'after-close': this.handleAfterClose
            }
          }, [
            createElement('div', {
              class: ['vx-popover--content', popover.popoverClass],
              style: {
                opacity: '0'
              },
              slot: 'inner',
              on: {
                click: this.handleClose
              }
            }, [...popover.$slots.default])
          ])
        },
        components: {VxPopup},
        data () {
          return {
            open: false,
            opacity: popover.overlayOpacity,
            histroy: popover.histroy
          }
        },
        mounted () {
          this.open = true
          this.$nextTick(() => {
            let width = window.innerWidth
            let height = window.innerHeight
            let node = this.$el.querySelector('.vx-popover--content')
            let rect = popover.$el.getBoundingClientRect()
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
        beforeUnmount () {
          this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
        },
        methods: {
          handleClose () {
            this.open = false
          },
          handleAfterClose () {
            popover.$$popover.$destroy()
          }
        }
      })
      this.$emit('open')
    },
    handleClickPopover () {
      if (this.$$popover) {
        this.$$popover.open = false
        this.$$popover.$destroy()
        this.$$popover = null
      }
    }
  }
}
</script>
