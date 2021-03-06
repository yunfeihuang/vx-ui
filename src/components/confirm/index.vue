<template>
  <div class="vx-confirm">
    <overlay :open="open"></overlay>
      <transition name="confirm-scale" @after-enter="handleEnter" @after-leave="handleLeave">
      <div class="vx-confirm--inner" v-show="open">
        <div v-if="title" class="vx-confirm--title">{{title}}</div>
        <div class="vx-confirm--body">
          <div class="vx-confirm--table">
            <div class="vx-confirm--cell">
              <slot :open="open"></slot>
            </div>
          </div>
        </div>
        <div :class="['vx-confirm--footer']" onselectstart="return false;">
          <button :class="[{'is-cancel-light': cancelLight}]" v-if="cancel" type="button" @click="handleCancel">{{cancelText}}</button>
          <component :is="confirmTag" v-bind="confirmProps" @click="handleConfirm($event)">{{confirmText}}</component>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { historyPush } from 'utils/mixins'
import Overlay from '../overlay'
export default {
  name: 'Confirm',
  componentName: 'Confirm',
  mixins: [historyPush],
  components: {
    Overlay
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
    title: {
      type: String
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    cancelLight: {
      type: Boolean
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    confirmTag: {
      type: String,
      default: 'button'
    },
    confirmProps: {
      type: Object,
      default () {
        return {type: 'button'}
      }
    }
  },
  mounted () {
    if (this.open) {
      requestAnimationFrame(() => {
        this.pushState()
        this.$el.classList.add('is-show')
        this.handleEnter()
      })
    }
  },
  beforeDestroy () {
    this.$$timerEvent && clearTimeout(this.$$timerEvent)
  },
  watch: {
    open (value) {
      if (value) {
        requestAnimationFrame(() => {
          this.pushState()
          this.$el.classList.add('is-show')
        })
      }
    }
  },
  methods: {
    handleCancel () {
      this.$emit('update:open', false).$emit('close')
      this.$emit('button-click', 'cancel')
    },
    handleConfirm (e) {
      if (e.target && e.target.nodeName && e.target.nodeName.toLowerCase() === 'a') {
        this.$$timerEvent && clearTimeout(this.$$timerEvent)
        this.$$timerEvent = setTimeout(() => {
          this.open && this.$emit('update:open', false).$emit('confirm')
        }, 400)
      } else {
        this.open && this.$emit('update:open', false).$emit('confirm')
      }
      this.$emit('button-click', 'confirm')
    },
    handleEnter () {
      this.$emit('open')
    },
    handleLeave () {
      this.$nextTick(() => {
        this.goBack()
        this.$el.classList.remove('is-show')
        this.$emit('after-close')
      })
    }
  }
}
</script>
