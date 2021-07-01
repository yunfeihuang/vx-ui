<template>
  <vx-confirm
    :open="open"
    :confirmText="confirmText"
    :cancel="false"
    :history="history"
    :title="title"
    @confirm="handleConfirm"
    @close="handleClose"
    @after-close="handleAfterClose">
    <slot></slot>
  </vx-confirm>
</template>

<script>
import VxConfirm from '../confirm'
export default {
  name: 'VxAlert',
  components: {
    VxConfirm
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    history: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: '确定'
    }
  },
  setup (props, { emit }) {
    return {
      handleConfirm () {
        emit('update:open', false)
        emit('confirm')
      },
      handleClose () {
        emit('update:open', false)
        emit('close')
      },
      handleAfterClose () {
        emit('after-close')
      }
    }
  }
}
</script>
