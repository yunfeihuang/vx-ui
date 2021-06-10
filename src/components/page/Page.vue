<template>
  <div :class="['vx-page', `vx-page--${type}`]" v-bind="$attrs">
    <div class="vx-page--flexbox">
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VxPage',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
