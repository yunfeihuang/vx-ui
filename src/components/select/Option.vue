<template functional>
  <option :value="JSON.stringify(props)">
    <slot></slot>
  </option>
</template>
<script>
export default {
  componentName: 'XOption',
  props: {
    value: {
      type: [Number, String]
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
