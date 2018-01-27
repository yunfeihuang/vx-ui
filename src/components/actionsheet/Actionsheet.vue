<template>
  <popup :open="open" :history="history" :fast-close="fastClose" @on-close="handleClosePopup" @on-enter="handleEnter">
    <div :class="[$cssPrefix + 'actionsheet-inner']" onselectstart="return false;">
      <div :class="[$cssPrefix + 'actionsheet-items']">
        <slot></slot>
      </div>
      <div v-if="cancel" :class="$cssPrefix + 'actionsheet-cancel'" @click="handleClose">
        {{cancelText}}
      </div>
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
export default {
  name: 'Actionsheet',
  components: {
    Popup
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: true
    },
    value: {
      type: [String, Number]
    },
    cancel: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    fastClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'actionsheet']
    }
  },
  mounted () {
    if (this.open) {
      requestAnimationFrame(() => {
        this.$el.style.display = 'block'
      })
    }
  },
  watch: {
    open (value) {
      if (value) {
        requestAnimationFrame(() => {
          this.$el.style.display = 'block'
          this.$emit('on-open')
        })
      } else {
        setTimeout(() => {
          requestAnimationFrame(() => {
            this.$el.style.display = 'none'
          })
        }, 300)
      }
    }
  },
  methods: {
    handleClick (value) {
      this.$emit('on-close')
      this.$emit('on-click', value)
    },
    handleClose () {
      this.$emit('on-close')
    },
    handleClosePopup () {
      this.$emit('on-close')
    },
    handleEnter () {
      if (!this.$children) return
      requestAnimationFrame(() => {
        this.$children[0].$children.forEach((item) => {
          if (item.$el.className.indexOf('overlay') === -1) {
            item.value === this.value && (item.checked = true)
            item.$off('click').$on('click', this.handleClick)
          }
        })
      })
    }
  }
}
</script>
