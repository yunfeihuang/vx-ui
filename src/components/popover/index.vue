<template>
  <div :class="classes" @click="handleClick">
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
  computed: {
    classes () {
      return [this.$cssPrefix + 'popover']
    }
  },
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
      this.$popover = new Vue({
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
              'close': this.handleClose
            }
          })
        },
        components: {Popup},
        data: {
          open: true,
          opacity: popover.overlayOpacity,
          histroy: popover.histroy
        },
        mounted () {
          let node = this.$popoverContent = document.createElement('div')
          node.style.visibility = 'hidden'
          node.className = this.$cssPrefix + 'popover-content'
          popover.popoverClass && node.classList.add(popover.popoverClass)
          node.addEventListener('click', popover.handleClickPopover, false)
          popover.$slots.default.forEach((item) => {
            item.elm && item.elm.nodeType === 1 && node.appendChild(item.elm)
          })
          document.body.appendChild(node)
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
            isRight && node.classList.add(this.$cssPrefix + 'popover-content-right')
            isBottom && node.classList.add(this.$cssPrefix + 'popover-content-bottom')
          })
        },
        destroyed () {
          requestAnimationFrame(() => {
            this.$el.parentNode.removeChild(this.$el)
            this.$popoverContent.parentNode.removeChild(this.$popoverContent)
          })
        },
        methods: {
          handleClose () {
            this.open = false
            setTimeout(() => {
              this.$destroy()
            }, 200)
          }
        }
      })
      this.$emit('open')
    },
    handleClickPopover () {
      if (this.$popover) {
        this.$popover.open = false
        setTimeout(() => {
          this.$popover.$destroy()
        }, 200)
      }
    }
  }
}
</script>
