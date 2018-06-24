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
                visibility: 'hidden',
                position: 'absolute'
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
            let node = this.$el.querySelector('.vx-popover-content')
            let rect = popover.$el.getBoundingClientRect()
            let left = rect.left + 'px'
            let isRight = false
            let isBottom = false
            if (rect.left > window.innerWidth / 2) {
              isRight = true
              left = rect.right - node.offsetWidth + 'px'
            }
            let top = rect.top + rect.height + 'px'
            if (rect.top > window.innerHeight / 2) {
              isBottom = true
              top = rect.bottom - node.offsetHeight - rect.height - 24 + 'px'
            }
            requestAnimationFrame(() => {
              node.style.top = top
              node.style.left = left
              node.style.visibility = ''
              isRight && node.classList.add('vx-popover-content-right')
              isBottom && node.classList.add('vx-popover-content-bottom')
            })
          })
        },
        destroyed () {
          requestAnimationFrame(() => {
            this.$el.parentNode.removeChild(this.$el)
          })
        },
        methods: {
          handleClose () {
            this.open = false
          },
          handleCloseAfter () {
            this.$destroy()
          }
        }
      })
      this.$emit('open')
    },
    handleClickPopover () {
      if (this.$$popover) {
        this.$$popover.open = false
        setTimeout(() => {
          this.$$popover.$destroy()
        }, 200)
      }
    }
  }
}
</script>
