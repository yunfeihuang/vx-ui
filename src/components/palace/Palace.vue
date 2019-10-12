<template>
  <div :class="['vx-palace']">
    <div class="vx-palace--inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Palace',
  componentName: 'Palace',
  props: {
    grid: {
      type: Number,
      default: 2
    }
  }
}
</script>
