<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { tab } from 'utils/mixins.js'
export default {
  name: 'ButtonTab',
  mixins: [tab],
  computed: {
    classes () {
      return ['flexbox', this.$cssPrefix + 'button-tab']
    }
  },
  data () {
    return {
      childLength: this.$children.length
    }
  },
  methods: {
    changeHandler (value) {
      this.$emit('click', value)
      value !== this.active && this.$emit('on-change', value).$emit('input', value).$emit('update:active', value)
    }
  }
}
</script>
