<template>
  <div :class="classes" @click="clickHandler">
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
  name: 'Popover',
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
        this.clickHandler()
      } else {
        this.clickPopoverHandler()
      }
    }
  },
  mounted () {
    this.open && this.clickHandler()
  },
  methods: {
    clickHandler () {
      let popover = this
      let node = document.createElement('div')
      document.body.appendChild(node)
      /* eslint-disable no-new */
      this.$popover = new Vue({
        el: node,
        template: '<popup :open="open" :histroy="histroy" @on-close="closeHandler" :opacity="opacity" style="z-index:1000"></popup>',
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
          node.addEventListener('click', popover.clickPopoverHandler, false)
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
            this.$el.remove()
            this.$popoverContent.remove()
          })
        },
        methods: {
          closeHandler () {
            this.open = false
            setTimeout(() => {
              this.$destroy()
            }, 200)
          }
        }
      })
      this.$emit('on-open')
    },
    clickPopoverHandler () {
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
