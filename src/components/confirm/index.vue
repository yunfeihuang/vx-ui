<template>
  <div :class="classes">
    <transition name="confirm-fade">
      <overlay v-if="open"></overlay>
    </transition>
    <div :class="[$cssPrefix + 'confirm-wrapper']">
      <transition name="confirm-scale">
        <div :class="[$cssPrefix + 'confirm-inner']" v-if="open">
          <div :class="[$cssPrefix + 'confirm-body']">
            <slot></slot>
          </div>
          <divider></divider>
          <div :class="[$cssPrefix + 'confirm-footer',$cssPrefix + 'flexbox']" onselectstart="return false;">
            <button :class="$cssPrefix + 'flexbox-item'" v-if="cancel" type="button" @click="handleCancel">{{cancelText}}</button>
            <button :class="$cssPrefix + 'flexbox-item'" type="button" @click="handleConfirm">{{confirmText}}</button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { historyPush } from 'utils/mixins.js'
import Overlay from '../overlay'
import Divider from '../divider'
export default {
  componentName: 'Confirm',
  mixins: [historyPush],
  components: {
    Overlay,
    Divider
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    cancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'confirm']
    }
  },
  mounted () {
    if (this.open) {
      requestAnimationFrame(() => {
        this.pushState()
        this.$el.style.display = 'table'
      })
    }
  },
  watch: {
    open (value) {
      if (value) {
        requestAnimationFrame(() => {
          this.pushState()
          this.$el.style.display = 'table'
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
    handleCancel () {
      this.$emit('update:open', false).$emit('close')
    },
    handleConfirm () {
      this.open && this.$emit('update:open', false).$emit('confirm')
    }
  }
}
</script>
