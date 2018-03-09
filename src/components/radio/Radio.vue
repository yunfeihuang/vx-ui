<template>
  <label :class="classes" :disabled="disabled" >
    <input type="radio" :name="name" :value="value" :disabled="disabled" :checked="myChecked" @change="handleChange"/>
    <span :class="[$cssPrefix + 'radio-icon']"><icon>&#xe632;</icon></span>
    <span :class="[$cssPrefix + 'radio-text']">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { input } from 'utils/mixins.js'
import Icon from '../icon'
export default {
  componentName: 'Radio',
  components: {
    Icon
  },
  mixins: [input],
  computed: {
    classes () {
      return [this.$cssPrefix + 'radio']
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
