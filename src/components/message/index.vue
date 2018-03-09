<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Message',
  props: {
    type: {
      type: String,
      default: 'warning'
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'message', this.$cssPrefix + 'message-' + this.type]
    }
  }
}
</script>
