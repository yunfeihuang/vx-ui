<template>
  <span :disabled ="disabled" :value="value"><slot></slot></span>
</template>
<script>
export default {
  componentName: 'XOption',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
