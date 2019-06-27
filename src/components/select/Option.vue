<template functional>
  <option v-bind="props"><slot></slot></option>
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
    },
    label: {
      type: String
    },
    exclusive: {
      type: Boolean
    }
  }
}
</script>
