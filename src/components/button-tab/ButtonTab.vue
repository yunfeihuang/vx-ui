<template>
  <div :class="['vx-button-tab', `vx-button-tab--size-${size}`]" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { tab } from '@/utils/mixins'
export default {
  name: 'VxButtonTab',
  mixins: [tab],
  props: {
    size: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    handleChange (value) {
      if (value !== this.active) {
        this.$emit('update:active', value)
      }
    }
  }
}
</script>
