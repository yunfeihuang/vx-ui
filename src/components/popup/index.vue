<template>
  <div :class="classes">
    <transition name="popup-fade" v-if="!full">
      <overlay v-if="open" @click.native="handleClose"></overlay>
    </transition>
    <transition :name="full?'popup-full-slide-'+direction:'popup-slide-'+direction" @enter="handleEnter">
      <div v-if="open" :class="innerClasses" @click="handleClose2">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { historyPush } from 'utils/mixins.js'
import Overlay from '../overlay'
export default {
  componentName: 'Popup',
  components: {
    Overlay
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
    }
  },
  computed: {
    classes () {
      return ['vx-popup']
    },
    innerClasses () {
      let array = ['vx-popup-inner', 'vx-popup-' + this.direction, this.full ? 'vx-full' : '']
      if (this.direction === 'center') {
        array.push('vx-flexbox vx-flexbox-align-center vx-flexbox-content-center')
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
    handleEnter () {
      this.$emit('enter')
    },
    handleClose () {
      this.fastClose && this.$emit('close')
    },
    handleClose2 (e) {
      if (this.fastClose && e.target === this.$el.querySelector('.' + 'vx-popup-inner')) {
        this.$emit('close')
      }
    }
  }
}
</script>
