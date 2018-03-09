<template>
  <popup :class="classes" :open="open" :history="history" :fast-close="fastClose" :direction="myDirection" @close="handleClosePopup" @enter="handleEnter">
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
  componentName: 'Actionsheet',
  components: {
    Popup
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
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
      return [this.$cssPrefix + 'actionsheet', this.type === 'menu' ? this.$cssPrefix + 'actionsheet-menu' : '']
    },
    myDirection () {
      if (this.type === 'default') {
        return 'bottom'
      } else if (this.type === 'menu') {
        return 'center'
      }
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
          this.$emit('open')
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
      this.$emit('update:open', false).$emit('close').$emit('click', value)
    },
    handleClose () {
      this.$emit('update:open', false).$emit('close')
    },
    handleClosePopup () {
      this.$emit('update:open', false).$emit('close')
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
