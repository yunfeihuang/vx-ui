<template>
  <div :class="['vx-accordion']" :data-mutex="mutex">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Accordion',
  props: {
    mutex: {
      type: Boolean,
      default: true
    }
  }
}
</script>
