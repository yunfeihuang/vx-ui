<template>
  <label :class="classes" :disabled="myDisabled" >
    <input :type="myType" :name="name" :value="value" :disabled="myDisabled" :checked="myChecked" @change="handleChange"/>
    <i class="vx-checkbox-icon"></i>
    <span class="vx-checkbox-text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { input } from 'utils/mixins'
export default {
  componentName: 'Checkbox',
  mixins: [input],
  computed: {
    classes () {
      return [
        'vx-checkbox',
        {
          'is-active': this.myChecked,
          'vx-checkbox-reverse': this.direction === 'reverse' || this.$parent.direction === 'reverse'
        }
      ]
    },
    myChecked () {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckboxGroup' && this.$parent.value && this.$parent.value.indexOf) {
        if (this.$parent.value instanceof Array) {
          return this.$parent.value.indexOf(this.value) > -1
        } else {
          return this.$parent.value === this.value
        }
      } else {
        return this.checked
      }
    },
    myType () {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckboxGroup') {
        return this.$parent.max === 1 ? 'radio' : 'checkbox'
      } else {
        return this.type
      }
    },
    myDisabled () {
      let disabled = this.disabled
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckboxGroup' && this.$parent.max > 1 && this.$parent.value.length >= this.$parent.max) {
        return this.$parent.value.indexOf(this.value) === -1
      }
      return disabled
    }
  },
  props: {
    direction: {
      type: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'checkbox'
    }
  },
  methods: {
    handleChange (e) {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckboxGroup') {
        this.$parent.handleChange(e)
      } else {
        this.$emit('update:checked', e.target.checked).$emit('change', e)
      }
    }
  }
}
</script>
