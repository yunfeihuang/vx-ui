<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { tab } from 'utils/mixins.js'
export default {
  componentName: 'ButtonTab',
  mixins: [tab],
  computed: {
    classes () {
      return [this.$cssPrefix + 'flexbox', this.$cssPrefix + 'button-tab']
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
