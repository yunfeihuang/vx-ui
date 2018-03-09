<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { tab } from 'utils/mixins.js'
import Divider from '../divider'
export default {
  componentName: 'Sidebar',
  components: {
    Divider
  },
  mixins: [tab],
  computed: {
    classes () {
      return [this.$cssPrefix + 'sidebar']
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
