<template>
  <div :class="['vx-tabbar']" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { tab } from '@/utils/mixins'
export default {
  name: 'VxTabbar',
  props: {
    ripple: {
      type: Boolean,
      default: false
    }
  },
  mixins: [tab],
  methods: {
    handleChange (val) {
      if (val !== this.active) {
        this.$emit('update:active', val)
        this.$emit('change', val)
      }
    }
  }
}
</script>
