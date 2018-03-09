<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Divider',
  computed: {
    classes () {
      return [this.$cssPrefix + 'divider']
    }
  }
}
</script>
