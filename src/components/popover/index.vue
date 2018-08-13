<template>
  <div class="vx-popover" @click="handleClick">
    <slot name="trigger"></slot>
    <div style="display:none">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Popup from '../popup'
export default {
  componentName: 'Popover',
  props: {
    open: {
      type: Boolean,
      default: false
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
  watch: {
    open (value) {
      if (value) {
        this.handleClick()
      } else {
        this.handleClickPopover()
      }
    }
  },
  mounted () {
    this.open && this.handleClick()
  },
  methods: {
    handleClick () {
      let popover = this
      let node = document.createElement('div')
      document.body.appendChild(node)
      /* eslint-disable no-new */
      this.$$popover = new Vue({
        el: node,
        render (createElement) {
          return createElement(Popup, {
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
              'close-after': this.handleCloseAfter
            }
          }, [
            createElement('div', {
              class: ['vx-popover-content', popover.popoverClass],
              style: {
                opacity: '0'
              },
              slot: 'inner',
              on: {
                click: popover.handleClickPopover
              }
            }, [...popover.$slots.default])
          ])
        },
        components: {Popup},
        data: {
          open: true,
          opacity: popover.overlayOpacity,
          histroy: popover.histroy
        },
        mounted () {
          this.$nextTick(() => {
            let width = window.innerWidth
            let height = window.innerHeight
            let node = this.$el.querySelector('.vx-popover-content')
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
              left === 'auto' && node.classList.add('vx-popover-content-right')
              top === 'auto' && node.classList.add('vx-popover-content-bottom')
            })
          })
        },
        destroyed () {
          this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
        },
        methods: {
          handleClose () {
            this.open = false
          },
          handleCloseAfter () {
            this.$nextTick(() => {
              this.$destroy()
            })
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
