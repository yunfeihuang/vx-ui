<template>
  <div :class="classes" @click="clickHandler">
    <div :class="cssPrefix + 'actionsheet-item-text'" :disabled="disabled">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  name: 'ActionsheetItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'actionsheet-item', this.checked ? cssPrefix + 'action-sheet-item-active' : '']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      checked: false
    }
  },
  methods: {
    clickHandler () {
      !this.disabled && this.$emit('click', this.value)
    }
  }
}
</script>
