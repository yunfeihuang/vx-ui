<template>
  <div :class="['vx-flexbox', 'vx-button-tab', `vx-button-tab--size-${size}`]" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { tab } from 'utils/mixins'
export default {
  name: 'ButtonTab',
  componentName: 'ButtonTab',
  mixins: [tab],
  props: {
    size: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    handleChange (value) {
      value !== this.active && this.$emit('update:active', value).$emit('change', value)
    }
  }
}
</script>
