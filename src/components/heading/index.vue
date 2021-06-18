<template>
  <div :class="['vx-heading', `vx-heading--${type}`]" v-bind="$attrs" v-on="$attrs">
    <div class="vx-heading--inner">
      <slot name="prepend"></slot>
      <div class="vx-heading--title">
        <slot></slot>
      </div>
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VxHeading',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
