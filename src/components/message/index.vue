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
      return ['vx-message', 'vx-message-' + this.type]
    }
  }
}
</script>
