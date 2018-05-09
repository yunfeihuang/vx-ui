<template>
  <label :class="classes" :disabled="disabled" >
    <input type="radio" :name="name" :value="value" :disabled="disabled" :checked="myChecked" @change="handleChange"/>
    <i :class="['vx-radio-icon']"></i>
    <span :class="['vx-radio-text']">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { input } from 'utils/mixins.js'
export default {
  componentName: 'Radio',
  mixins: [input],
  computed: {
    classes () {
      return ['vx-radio']
    },
    myChecked () {
      if (this.$parent.value) {
        return this.$parent.value === this.value
      } else {
        return this.checked
      }
    }
  },
  methods: {
    handleChange () {
      if (this.$parent.value) {
        this.$parent.handleChange(this.value)
      } else {
        this.$emit('input', this.value).$emit('change', this.value)
      }
    }
  }
}
</script>
