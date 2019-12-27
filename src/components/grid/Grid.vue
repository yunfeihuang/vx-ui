<template>
  <div :class="['vx-grid']">
    <div class="vx-grid--inner" :style="`width: calc(100% + ${gutter}px);padding-top: ${gutter > 1 ? gutter : ''}px`">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Grid',
  componentName: 'Grid',
  props: {
    col: {
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
