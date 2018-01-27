<template>
  <div :class="classes">
    <input 
      :disabled="disabled" 
      :name="name" 
      :checked="value"
      type="checkbox"
      @change="changeHandler"
      />
    <button type="button"></button>
  </div>
</template>

<script>
import { input } from 'utils/mixins.js'
export default {
  name: 'XSwitch',
  mixins: [input],
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'switch-wrapper']
    }
  },
  methods: {
    changeHandler (e) {
      let value = e.target.checked
      this.$emit('input', value).$emit('on-change', value)
    }
  }
}
</script>
