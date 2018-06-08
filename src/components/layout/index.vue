<template>
  <div :class="classes">
    <flexbox :class="['vx-layout-flexbox']" direction="column">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </flexbox>
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Layout',
  computed: {
    classes () {
      return ['vx-layout']
    }
  }
}
</script>
