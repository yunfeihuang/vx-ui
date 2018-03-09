<template>
  <div :class="classes" :disabled="disabled">
    <slot></slot>
  </div>
</template>

<script>
import { input } from 'utils/mixins.js'

export default {
  componentName: 'CheckerGroup',
  mixins: [input],
  props: {
    value: {
      type: [Array, String],
      default () {
        return []
      }
    },
    max: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'checker-group']
    }
  },
  methods: {
    handleChange (e) {
      if (this.max === 1) {
        this.$emit('input', [e.target.value]).$emit('change', [e.target.value])
      } else {
        if (e.target.checked && this.max !== 0 && this.value.length === this.max) {
          e.target.checked = false
          this.$toast({content: `选择项不得超过${this.max}个`})
        } else {
          let value = Object.assign([], this.value)
          if (e.target.checked) {
            value.indexOf(e.target.value) === -1 && value.push(e.target.value)
          } else {
            value.splice(value.indexOf(e.target.value), 1)
          }
          this.$emit('input', value).$emit('change', value)
        }
      }
    }
  }
}
</script>
