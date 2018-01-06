<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { tab } from 'utils/mixins.js'
import Divider from '../divider'
export default {
  name: 'Sidebar',
  components: {
    Divider
  },
  mixins: [tab],
  computed: {
    classes () {
      return [cssPrefix + 'sidebar']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      childLength: this.$children.length
    }
  },
  methods: {
    changeHandler (value) {
      this.$emit('click', value)
      value !== this.active && this.$emit('on-change', value).$emit('input', value)
    }
  }
}
</script>
