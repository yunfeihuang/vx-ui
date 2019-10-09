<template>
  <div :class="['vx-palace']">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Palace',
  componentName: 'Palace',
  props: {
    column: {
      type: Number,
      default: 2
    }
  }
}
</script>
