<template >
  <span :disabled="disabled" :value="value"><slot></slot></span>
</template>
<script>
export default {
  componentName: 'XOption',
  inject: ['select'],
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    }
  },
  created () {
    this.select.options.push(this)
  },
  destroyed () {
    this.select.options = this.select.options.filter(item => item !== this)
  }
}
</script>
