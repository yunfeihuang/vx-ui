<template>
  <div class="vx-popup">
    <transition name="popup-fade" v-if="!full">
      <overlay v-show="open" @click="handleClose"></overlay>
    </transition>
    <slot name="inner" v-if="$slots.inner"></slot>
    <transition
      v-else
      :name="full?'popup-full-slide-'+direction:'popup-slide-'+direction"
      @enter="handleEnter"
      @before-enter="handleBeforeEnter"
      @after-enter="handleAfterEnter"
      @before-leave="handleBeforeLeave"
      @leave="handleLeave"
      @after-leave="handleAfterLeave">
      <div v-show="open" :class="innerClasses" @click="handleClose2">
        <div class="vx-popup--relative">
          <rem-to-px :height="0.5" :width="0.5" v-if="showClose" class="vx-popup--close" @click.native="close"></rem-to-px>
          <slot :open="open"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { historyPush } from 'utils/mixins'
import Overlay from '../overlay'
import RemToPx from '../remtopx'
export default {
  componentName: 'Popup',
  components: {
    Overlay,
    RemToPx
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
    }
  },
  computed: {
    innerClasses () {
      let array = ['vx-popup--inner', 'vx-popup--' + this.direction, this.full ? 'vx-full' : '']
      if (this.direction === 'center') {
        array.push('vx-flexbox vx-flexbox--align-center vx-flexbox--content-center')
      }
      return array
    }
  },
  mounted () {
    if (this.open) {
      requestAnimationFrame(() => {
        this.pushState()
        this.$el.style.display = 'block'
      })
    }
  },
  watch: {
    open (value) {
      if (value) {
        requestAnimationFrame(() => {
          this.pushState()
          this.$el.style.display = 'block'
          this.$emit('open')
        })
      } else {
        setTimeout(() => {
          requestAnimationFrame(() => {
            this.goBack()
            this.$el.style.display = 'none'
          })
        }, 300)
      }
    }
  },
  methods: {
    handleBeforeEnter () {
      this.$emit('before-enter')
    },
    handleEnter () {
      this.$emit('enter')
    },
    handleAfterEnter () {
      this.$emit('after-enter')
    },
    close () {
      this.$emit('close').$emit('update:open', false)
    },
    handleClose () {
      this.fastClose && this.close()
    },
    handleClose2 (e) {
      if (this.fastClose && e.target === this.$el.querySelector('.vx-popup--inner')) {
        this.close()
      }
    },
    handleBeforeLeave () {
      this.$emit('before-after')
    },
    handleLeave () {
      this.$emit('leave')
    },
    handleAfterLeave () {
      this.$emit('close-after')
    }
  }
}
</script>
