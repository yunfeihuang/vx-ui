<template>
  <div :class="['vx-flexbox', 'vx-button-tab']" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { tab } from 'utils/mixins'
export default {
  componentName: 'ButtonTab',
  mixins: [tab],
  methods: {
    handleChange (value) {
      value !== this.active && this.$emit('update:active', value).$emit('change', value)
    }
  }
}
</script>
