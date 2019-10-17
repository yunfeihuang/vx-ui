<template>
  <div :class="['vx-palace']">
    <div class="vx-palace--inner" :style="`width: calc(100% + ${gutter}px);`">
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
    },
    gutter: {
      type: Number,
      default: 1
    }
  }
}
</script>
