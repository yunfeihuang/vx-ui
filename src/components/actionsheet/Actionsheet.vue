<template>
  <vx-popup
    :class="classes"
    :open="open"
    :history="history"
    :fast-close="fastClose"
    :direction="myDirection"
    @close="handleClose"
    @after-close="handleAfterClose"
    @open="handleOpen">
    <div class="vx-actionsheet--inner" onselectstart="return false;">
      <div v-if="title" class="vx-actionsheet--title">
        {{title}}
      </div>
      <div class="vx-actionsheet--items">
        <slot></slot>
      </div>
      <div v-if="cancel" class="vx-actionsheet--cancel" @click="handleClose">
        {{cancelText}}
      </div>
    </div>
  </vx-popup>
</template>

<script>
import VxPopup from '../popup'
export default {
  name: 'VxActionsheet',
  components: {
    VxPopup
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
    modelValue: {
      type: String
    },
    cancel: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
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
      return ['vx-actionsheet', {'vx-actionsheet--menu': this.type === 'menu', 'is-not-title': !this.title}]
    },
    myDirection () {
      if (this.type === 'default') {
        return 'bottom'
      } else if (this.type === 'menu') {
        return 'center'
      }
      return this.type
    }
  },
  methods: {
    handleAction (value) {
      this.$emit('update:open', false)
      this.$emit('action', value)
    },
    handleClose () {
      this.$emit('update:open', false)
      this.$emit('close')
    },
    handleAfterClose () {
      this.$emit('after-close')
    },
    handleOpen () {
      Array.from(this.$el.querySelectorAll('.vx-actionsheet--item')).forEach(item => {
        item.onclick = this.handleAction.bind(this, item.dataset.value)
      })
    }
  }
}
</script>
