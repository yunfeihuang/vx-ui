<template>
  <div :class="['vx-spinner--wrapper']" v-bind="$attrs">
      <div
        class="vx-spinner"
        :style="`border-top-color: ${primaryColor};
          border-right-color: ${color};
          border-bottom-color: ${color};
          border-left-color: ${color};`"></div>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VxSpinner',
  props: {
    color: {
      type: String,
      default: ''
    },
    primaryColor: {
      type: String,
      default: ''
    }
  }
}
</script>
