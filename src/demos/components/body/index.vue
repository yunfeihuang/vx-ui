<template>
  <flexbox-item :class="classes">
    <slot></slot>
  </flexbox-item>
</template>

<script>
export default {
  name: 'XBody',
  computed: {
    classes () {
      return [this.$cssPrefix + 'body', this.scroll ? 'scrollbox' : '']
    }
  },
  props: {
    scroll: {
      type: Boolean,
      default: true
    }
  }
}
</script>
