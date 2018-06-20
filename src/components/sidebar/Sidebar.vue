<template>
  <div class="vx-sidebar" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { tab } from 'utils/mixins'
export default {
  componentName: 'Sidebar',
  mixins: [tab],
  data () {
    return {
      childLength: this.$children.length
    }
  },
  methods: {
    handleChange (value) {
      value !== this.active && this.$emit('update:active', value).$emit('change', value)
    }
  }
}
</script>
