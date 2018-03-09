<template>
  <label :class="$cssPrefix + 'checker'">
    <input
      :type="myType"
      :checked="myChecked"
      :name="name"
      :value="value"
      :disabled="disabled"
      @change="handleChange"
      />
    <button type="button" :disabled="disabled">
      <slot></slot>
    </button>
  </label>
</template>

<script>
import { input } from 'utils/mixins.js'

export default {
  componentName: 'Checker',
  mixins: [input],
  props: {
    value: {
      type: [String]
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'checker']
    },
    myChecked () {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckerGroup' && this.$parent.value && this.$parent.value.indexOf) {
        return this.$parent.value.indexOf(this.value) > -1
      } else {
        return this.checked
      }
    },
    myType () {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckerGroup') {
        return this.$parent.max === 1 ? 'radio' : 'checkbox'
      } else {
        return this.type
      }
    }
  },
  methods: {
    handleChange (e) {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckerGroup') {
        this.$parent.handleChange(e)
      } else {
        this.$emit('update:checked', e.target.checked).$emit('change', e)
      }
    }
  }
}
</script>
