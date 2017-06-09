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
import { cssPrefix } from 'utils/variable.js'
import Overlay from '../overlay'
export default {
  computed: {
    classes () {
      return [cssPrefix + 'popover']
    }
  },
  props: {
    open: {
      type: Boolean,
      default: false
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
        template: '<overlay @click="clickHandler" :opacity="opacity" style="z-index:1000"></overlay>',
        components: {Overlay},
        data: {
          opacity: popover.overlayOpacity
        },
        mounted () {
          let node = this.$popoverContent = document.createElement('div')
          node.className = cssPrefix + 'popover-content'
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
            isRight && node.classList.add(cssPrefix + 'popover-content-right')
            isBottom && node.classList.add(cssPrefix + 'popover-content-bottom')
          })
        },
        destroyed () {
          requestAnimationFrame(() => {
            this.$el.remove()
            this.$popoverContent.remove()
          })
        },
        methods: {
          clickHandler () {
            this.$destroy()
          }
        }
      })
      this.$emit('on-open')
    },
    clickPopoverHandler () {
      this.$popover && this.$popover.$destroy()
      this.$emit('on-close')
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &popover{
      display: inline-block;
      vertical-align: middle;
      &-content{
        position:fixed;
        background:#fff;
        border-radius:5px;
        color:#555;
        padding: 0.6rem;
        z-index:1001;
        margin: 12px 0;
        &:before{
          content:'';
          border:10px solid transparent;
          border-bottom-color:#fff;
          position:absolute;
          left:10px;
          top:-18px;
        }
        &-right{
          &:before{
            right:10px;
            left:auto;
          }
        }
        &-bottom{
          &:before{
            border:10px solid transparent;
            border-top-color:#fff;
            bottom:-18px;
            top:auto;
          }
        }
      }
    }  
  }
</style>
