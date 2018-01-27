<template>
  <confirm
    :open="open"
    :confirmText="confirmText"
    :cancel="false"
    :history="history"
    @on-confirm="handleConfirm"
    @on-close="handleClose">
    <slot></slot>
  </confirm>
</template>

<script>
import Confirm from '../confirm'
export default {
  name: 'Alert',
  components: {
    Confirm
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
    confirmText: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    handleConfirm () {
      this.$emit('update:open', false).$emit('on-confirm')
    },
    handleClose () {
      this.$emit('update:open', false).$emit('on-close')
    }
  }
}
</script>
