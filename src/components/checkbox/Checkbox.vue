<template>
  <label :class="classes" :disabled="disabled" >
    <input :type="myType" :name="name" :value="value" :disabled="disabled" :checked="myChecked" @change="handleChange"/>
    <icon :class="[$cssPrefix + 'checkbox-icon']">&#xe632;</icon>
    <span :class="[$cssPrefix + 'checkbox-text']">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { input } from 'utils/mixins.js'
import Icon from '../icon'
export default {
  componentName: 'Checkbox',
  components: {
    Icon
  },
  mixins: [input],
  computed: {
    classes () {
      return [
        this.$cssPrefix + 'checkbox',
        this.direction === 'reverse' || this.$parent.direction === 'reverse' ? this.$cssPrefix + 'checkbox-reverse' : '',
        this.myChecked ? this.$cssPrefix + 'checkbox-active' : ''
      ]
    },
    myChecked () {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckboxGroup' && this.$parent.value && this.$parent.value.indexOf) {
        return this.$parent.value.indexOf(this.value) > -1
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
