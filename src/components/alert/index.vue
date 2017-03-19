<template>
  <confirm  :class="clas" :style="style" :open="open" :confirmText="confirmText" :cancel="false" @on-confirm="confirmHandler">
    <slot></slot>
  </confirm>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
import Confirm from '../confirm'
export default {
  mixins: [base],
  components: {
    Confirm
  },
  props: {
    open: {
      type: Boolean,
      default: false
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
    }
  }
}
</script>

<style lang="scss">
  
</style>
