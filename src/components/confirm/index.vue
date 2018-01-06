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
            <button class="flexbox-item" v-if="cancel" type="button" @click="cancelHandler">{{cancelText}}</button>
            <button class="flexbox-item" type="button" @click="confirmHandler">{{confirmText}}</button>
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
  name: 'Confirm',
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
    cancelHandler () {
      this.$emit('on-close')
    },
    confirmHandler () {
      this.open && this.$emit('on-confirm')
    }
  }
}
</script>
