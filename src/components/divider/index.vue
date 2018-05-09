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
      return ['vx-divider']
    }
  }
}
</script>
