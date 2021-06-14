<template>
  <transition name="vx--popup-fade" @enter="handleEnter" @after-leave="handleLeave">
    <div v-show="open" :class="['vx-toast','vx-toast--' + align]">
      <div class="vx-toast--inner">
        <div class="vx-toast--content">
          <template v-if="type != 'default'">
            <vx-spinner v-if="type==='loading'" class="vx-toast--loading" v-bind="spinnerProps"/>
            <i v-else :class="['vx-toast--icon',`vx-toast--${type}`]"></i>
            <br />
          </template>
          <slot></slot>
        </div>
      </div>
      <vx-overlay :open="isOverlay && open" :opacity="overlayOpacity"></vx-overlay>
    </div>
  </transition>
</template>

<script>
import VxSpinner from '../spinner'
import VxOverlay from '../overlay'

export default {
  name: 'VxToast',
  components: {
    VxSpinner,
    VxOverlay
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
      if (node && node.children && node.children[0]) {
        let width = node.children[0].offsetWidth + 4
        let height = node.children[0].offsetHeight + 4
        requestAnimationFrame(() => {
          node.style.width = width + 'px'
          node.style.height = height + 'px'
        })
        this.$$timer && clearTimeout(this.$$timer)
        if (this.duration) {
          this.$$timer = setTimeout(() => {
            this.$emit('update:open', false)
            this.$emit('close')
          }, this.duration)
        }
      }
    },
    handleLeave () {
      this.$emit('after-close')
    }
  }
}
</script>
