<template>
  <div :class="['vx-radio-group', {'vx-radio-group-divider': divider}]" :disabled="disabled">
    <slot></slot>
  </div>
</template>

<script>
import { input } from 'utils/mixins'
import Radio from './Radio'

export default {
  componentName: 'RadioGroup',
  mixins: [input],
  components: {
    Radio
  },
  props: {
    divider: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleChange (value) {
      this.$emit('input', value).$emit('change', value)
    }
  }
}
</script>
