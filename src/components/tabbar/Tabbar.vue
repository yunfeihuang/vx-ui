<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { tab } from 'utils/mixins.js'
import Divider from '../divider'
export default {
  componentName: 'Tabbar',
  components: {
    Divider
  },
  props: {
    ripple: {
      type: Boolean,
      default: false
    }
  },
  mixins: [tab],
  computed: {
    classes () {
      return [this.$cssPrefix + 'flexbox', this.$cssPrefix + 'tabbar']
    }
  },
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
