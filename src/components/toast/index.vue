<template>
  <transition name="popup-fade" @enter="handleEnter" @after-leave="handleLeave">
    <div v-show="open" :class="['vx-toast','vx-toast--' + align]">
      <div class="vx-toast--inner">
        <div class="vx-toast--content">
          <template v-if="type != 'default'">
            <spinner v-if="type==='loading'" class="vx-toast--loading" v-bind="spinnerProps"/>
            <i v-else :class="['vx-toast--icon',`vx-toast--${type}`]"></i>
            <br />
          </template>
          <slot></slot>
        </div>
      </div>
      <overlay :open="isOverlay && open" :opacity="overlayOpacity"></overlay>
    </div>
  </transition>
</template>

<script>
import Popup from '../popup'
import Spinner from '../spinner'
import Overlay from '../overlay'

export default {
  componentName: 'Toast',
  components: {
    Popup,
    Spinner,
    Overlay
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'top'
    },
    duration: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'default'
    },
    destroy: {
      type: Boolean,
      default: false
    },
    spinnerProps: {
      type: Object,
      default () {
        return {
          color: '#999',
          primaryColor: '#fff'
        }
      }
    },
    isOverlay: {
      type: Boolean
    },
    overlayOpacity: {
      type: Number
    }
  },
  mounted () {
    this.open && this.handleEnter(this.$el)
  },
  methods: {
    handleEnter (node) {
      let width = node.children[0].offsetWidth + 4
      let height = node.children[0].offsetHeight + 4
      requestAnimationFrame(() => {
        node.style.width = width + 'px'
        node.style.height = height + 'px'
      })
      this.$$timer && clearTimeout(this.$$timer)
      if (this.duration) {
        this.$$timer = setTimeout(() => {
          this.$emit('update:open', false).$emit('close')
        }, this.duration)
      }
    },
    handleLeave () {
      this.$emit('after-close')
    }
  }
}
</script>
