<template>
  <div :class="['vx-flexbox', 'vx-tabbar']" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { tab } from 'utils/mixins.js'
export default {
  componentName: 'Tabbar',
  props: {
    ripple: {
      type: Boolean,
      default: false
    }
  },
  mixins: [tab],
  data () {
    return {
      childLength: this.$children.length
    }
  },
  methods: {
    handleChange (val) {
      if (val !== this.active) {
        this.$emit('update:active', val).$emit('change', val)
      }
    }
  }
}
</script>
