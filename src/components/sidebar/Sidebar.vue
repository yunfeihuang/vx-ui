<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
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
      return [this.$cssPrefix + 'sidebar']
    }
  },
  data () {
    return {
      childLength: this.$children.length
    }
  },
  methods: {
    changeHandler (value) {
      value !== this.active && this.$emit('on-change', value).$emit('input', value)
    }
  }
}
</script>
