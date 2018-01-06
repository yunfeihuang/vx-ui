<template>
  <i :class="classes">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'Icon',
  computed: {
    classes () {
      return [this.$cssPrefix + 'iconfont']
    }
  }
}
</script>
