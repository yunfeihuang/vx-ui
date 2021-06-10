<template>
  <div :class="['vx-message', 'vx-message--' + type]" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VxMessage',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
