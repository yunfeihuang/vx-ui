<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { tab } from 'utils/mixins.js'
export default {
  componentName: 'Sidebar',
  mixins: [tab],
  computed: {
    classes () {
      return ['vx-sidebar']
    }
  },
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
