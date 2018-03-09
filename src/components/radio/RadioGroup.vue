<template>
  <div :class="classes" :disabled="disabled">
    <slot></slot>
  </div>
</template>

<script>
import { input } from 'utils/mixins.js'
import Radio from './Radio'
import Divider from '../divider'

export default {
  componentName: 'RadioGroup',
  mixins: [input],
  components: {
    Radio,
    Divider
  },
  props: {
    divider: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'radio-group', this.divider ? this.$cssPrefix + 'radio-group-divider' : '']
    }
  },
  methods: {
    handleChange (value) {
      this.$emit('input', value).$emit('change', value)
    }
  }
}
</script>
