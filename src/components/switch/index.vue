<template>
  <div :class="classes">
    <input 
      :disabled="disabled" 
      :name="name" 
      :checked="openValue == value"
      type="checkbox"
      @change="handleChange"
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
    },
    openValue: {
      default: true
    },
    closeValue: {
      default: false
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'switch-wrapper']
    }
  },
  methods: {
    handleChange (e) {
      let value = e.target.checked ? this.openValue : this.closeValue
      this.$emit('input', value).$emit('on-change', value)
    }
  }
}
</script>
