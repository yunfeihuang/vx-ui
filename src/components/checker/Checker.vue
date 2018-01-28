<template>
  <label :class="$cssPrefix + 'checker'">
    <input
      :type="myType"
      :checked="myChecked"
      :name="name"
      :value="value"
      @change="handleChange"
      />
    <span :disabled="disabled"><slot></slot></span>
  </label>
</template>

<script>
import { input } from 'utils/mixins.js'

export default {
  name: 'Checker',
  mixins: [input],
  props: {
    value: {
      type: [Array, String],
      default: []
    },
    checkedMaxItem: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'checker']
    },
    myChecked () {
      if (this.$parent.componentName && this.$parent.componentName === 'CheckerGroup' && this.$parent.value && this.$parent.value.indexOf) {
        return this.$parent.value.indexOf(this.value) > -1
      } else {
        return this.checked
      }
    },
    myType () {
      if (this.$parent.componentName && this.$parent.componentName === 'CheckerGroup') {
        return this.$parent.checkedMaxItem === 1 ? 'radio' : 'checkbox'
      } else {
        return this.type
      }
    }
  },
  methods: {
    handleChange (e) {
      if (this.$parent.componentName && this.$parent.componentName === 'CheckerGroup') {
        this.$parent.handleChange(e)
      } else {
        this.$emit('update:checked', e.target.checked).$emit('on-change', e)
      }
    }
  }
}
</script>
