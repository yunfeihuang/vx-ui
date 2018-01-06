<template>
  <div :class="classes">
    <transition name="popup-fade" v-if="!full">
      <overlay v-if="open" @click.native="closeHandler"></overlay>
    </transition>
    <transition :name="full?'popup-full-slide-'+direction:'popup-slide-'+direction" @enter="enterHandler">
      <div v-if="open" :class="innerClasses">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { historyPush } from 'utils/mixins.js'
import Overlay from '../overlay'
export default {
  name: 'Popup',
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
      return [this.$cssPrefix + 'popup']
    },
    innerClasses () {
      let array = [this.$cssPrefix + 'popup-inner', this.$cssPrefix + 'popup-' + this.direction, this.full ? this.$cssPrefix + 'full' : '']
      if (this.direction === 'center') {
        array.push('flexbox flexbox-align-center flexbox-content-center')
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
          this.$emit('on-open')
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
    enterHandler () {
      this.$emit('on-enter')
    },
    closeHandler () {
      this.fastClose && this.$emit('on-close')
    }
  }
}
</script>
