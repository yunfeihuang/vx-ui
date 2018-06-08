<template>
  <div :class="vx-step" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from '../flexbox'

export default {
  componentName: 'Step',
  components: {
    Flexbox,
    FlexboxItem
  },
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
