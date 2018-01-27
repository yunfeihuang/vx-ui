<template>
  <div :class="classes" :disabled="disabled">
    <slot></slot>
  </div>
</template>

<script>
import { input } from 'utils/mixins.js'
import Checkbox from './Checkbox'

export default {
  name: 'CheckboxGroup',
  mixins: [input],
  components: {
    Checkbox
  },
  props: {
    value: {
      default: []
    },
    divider: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'normal'
    },
    checkedMaxItem: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'checkbox-group', this.divider ? this.$cssPrefix + 'checkbox-group-divider' : '']
    }
  },
  methods: {
    handleChange (e) {
      if (this.checkedMaxItem === 1) {
        this.$emit('input', [e.target.value]).$emit('on-change', [e.target.value])
      } else {
        if (e.target.checked && this.checkedMaxItem !== 0 && this.value.length === this.checkedMaxItem) {
          e.target.checked = false
          window.$toast({content: `选择项不得超过${this.checkedMaxItem}个`})
        } else {
          let value = Object.assign([], this.value)
          if (e.target.checked) {
            value && value.indexOf && value.indexOf(e.target.value) === -1 && value.push(e.target.value)
          } else {
            value && value.indexOf && value.splice(value.indexOf(e.target.value), 1)
          }
          this.$emit('input', value).$emit('on-change', value)
        }
      }
    }
  }
}
</script>

