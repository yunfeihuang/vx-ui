<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { tab } from 'utils/mixins.js'
import Divider from '../divider'
export default {
  name: 'Tabbar',
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
      return [$cssPrefix + 'flexbox', this.$cssPrefix + 'tabbar']
    }
  },
  data () {
    return {
      childLength: this.$children.length
    }
  },
  methods: {
    changeHandler (val) {
      if (val !== this.active) {
        this.$emit('on-change', val).$emit('input', val)
      }
    }
  }
}
</script>
