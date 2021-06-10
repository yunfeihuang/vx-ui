<template>
  <div :class="['vx-page--body', {'vx-scroller': scroller}]"
    v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VxPageBody',
  props: {
    scroller: {
      type: Boolean,
      default: true
    }
  }
}
</script>
