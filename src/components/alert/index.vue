<template>
  <confirm
    :open="open"
    :confirmText="confirmText"
    :cancel="false"
    :history="history"
    @on-confirm="confirmHandler"
    @on-close="closeHandler">
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
    confirmHandler () {
      this.$emit('update:open', false).$emit('on-confirm')
    },
    closeHandler () {
      this.$emit('update:open', false).$emit('on-close')
    }
  }
}
</script>
