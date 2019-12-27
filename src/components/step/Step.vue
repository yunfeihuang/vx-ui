<template>
  <div :class="vx-step" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Step',
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleChange (value) {
      if (value !== this.active) {
        this.$emit('update:active', value).$emit('change', value)
        this.computedStyle()
      }
    }
  }
}
</script>
