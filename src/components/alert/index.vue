<template>
  <confirm
    :open="open"
    :confirmText="confirmText"
    :cancel="false"
    :history="history"
    :title="title"
    @confirm="handleConfirm"
    @close="handleClose"
    @after-close="handleAfterClose">
    <slot></slot>
  </confirm>
</template>

<script>
import Confirm from '../confirm'
export default {
  name: 'Alert',
  componentName: 'Alert',
  components: {
    Confirm
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
  methods: {
    handleConfirm () {
      this.$emit('update:open', false).$emit('confirm')
    },
    handleClose () {
      this.$emit('update:open', false).$emit('close')
    },
    handleAfterClose () {
      this.$emit('after-close')
    }
  }
}
</script>
