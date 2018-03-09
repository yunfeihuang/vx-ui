<template>
  <button :class="classes" :disabled="disabled" :type="nativeType" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import { button } from 'utils/mixins.js'
export default {
  componentName: 'XButton',
  mixins: [button],
  computed: {
    classes () {
      return [this.$cssPrefix + 'btn', this.type ? (this.$cssPrefix + 'btn-' + this.type) : this.clas]
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
