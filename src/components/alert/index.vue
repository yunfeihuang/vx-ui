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
import { cssPrefix } from 'utils/variable.js'
import Confirm from '../confirm'
export default {
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
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    confirmHandler () {
      this.$emit('on-confirm')
    },
    closeHandler () {
      this.$emit('on-close')
    }
  }
}
</script>

<style lang="scss">
  
</style>
