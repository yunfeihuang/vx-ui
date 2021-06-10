<template>
  <div :class="['vx-page', `vx-page--${type}`]" v-bind="$attrs">
    <div class="vx-page--flexbox">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
