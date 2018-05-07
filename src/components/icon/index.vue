<template>
  <i :class="classes">
    <slot></slot>
  </i>
</template>

<script>
export default {
  componentName: 'Icon',
  computed: {
    classes () {
      return [this.$cssPrefix + 'iconfont']
    }
  }
}
</script>
