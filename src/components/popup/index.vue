<template>
  <div class="vx-popup">
    <overlay v-if="!full" :opacity="overlayOpacity" :open="open" @click="handleClose"></overlay>
    <transition
      v-if="$slots.inner"
      name="popup-fade"
      @after-enter="handleEnter"
      @after-leave="handleLeave">
      <div v-show="open">
        <slot name="inner"></slot>
      </div>
    </transition>
    <transition
      v-else
      :name="full?'popup-full-slide-'+direction:'popup-slide-'+direction"
      @after-enter="handleEnter"
      @after-leave="handleLeave">
      <div v-show="open" :class="innerClasses" @click="handleClose2">
        <div class="vx-popup--nav" v-if="title && !showClose">
          <button type="button" @click="close">
            <arrow direction="left" color="#666" size="0.24rem"/>
          </button>
          <div class="vx-popup--nav-title">{{title}}</div>
        </div>
        <div class="vx-popup--nav" v-else-if="showClose && full">
          <div class="vx-popup--nav-title">{{title}}</div>
          <i class="vx-popup--close" @click="close"></i>
        </div>
        <slot v-else name="header"></slot>
        <div class="vx-popup--body" v-if="direction === 'center'">
          <i v-if="showClose" class="vx-popup--close" @click="close"></i>
          <slot :open="afterOpen"></slot>
        </div>
        <div class="vx-popup--body is-flex" v-else>
          <slot :open="afterOpen"></slot>
        </div>
        <slot name="footer"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { historyPush } from '@/utils/mixins'
import Overlay from '../overlay'
import Arrow from '../arrow'
export default {
  name: 'VxPopup',
  components: {
    Overlay,
    Arrow
  },
  mixins: [historyPush],
  props: {
    open: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'bottom'
    },
    fastClose: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    overlayOpacity: {
      type: Number
    }
  },
  data () {
    return {
      afterOpen: false
    }
  },
  computed: {
    innerClasses () {
      let array = ['vx-popup--inner', 'vx-popup--' + this.direction, {'is-full': this.full}]
      return array
    }
  },
  mounted () {
    if (this.open) {
      requestAnimationFrame(() => {
        this.pushState()
        this.$el.style.display = 'block'
        this.handleEnter()
      })
    }
  },
  watch: {
    open (value) {
      if (value) {
        requestAnimationFrame(() => {
          this.pushState()
          this.$el.style.display = 'block'
        })
      }
    }
  },
  methods: {
    handleEnter () {
      this.afterOpen = true
      this.$emit('open')
    },
    close () {
      this.$emit('update:open', false).$emit('close')
    },
    handleClose () {
      this.fastClose && this.close()
    },
    handleClose2 (e) {
      if (this.fastClose && e.target === this.$el.querySelector('.vx-popup--inner')) {
        this.close()
      }
    },
    handleLeave () {
      this.goBack()
      this.$el.style.display = 'none'
      this.afterOpen = false
      this.$emit('after-close')
    }
  }
}
</script>
