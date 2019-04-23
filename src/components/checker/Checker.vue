<template>
  <label :class="['vx-checker',{'is-disabled': myDisabled, 'is-checked': myChecked, 'is-icon': myIcon}]">
    <input
      :type="myType"
      :checked="myChecked"
      :name="name"
      :value="value"
      :disabled="disabled"
      @change="handleChange"
      />
    <slot v-if="$scopedSlots['default']" v-bind="{checked: myChecked, disabled: myDisabled}"></slot>
    <button v-else type="button" tabindex="-2">
      <slot></slot>
    </button>
  </label>
</template>

<script>
import { input } from 'utils/mixins'

export default {
  componentName: 'Checker',
  mixins: [input],
  props: {
    ...input.props,
    value: {
      type: [String]
    },
    icon: {
      type: Boolean
    }
  },
  computed: {
    myChecked () {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckerGroup' && this.$parent.value && this.$parent.value.indexOf) {
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
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckerGroup') {
        return this.$parent.max === 1 ? 'radio' : 'checkbox'
      } else {
        return this.type
      }
    },
    myDisabled () {
      let disabled = this.disabled
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckerGroup' && this.$parent.max > 1 && this.$parent.value.length >= this.$parent.max) {
        return this.$parent.value.indexOf(this.value) === -1
      }
      return disabled
    },
    myIcon () {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckerGroup') {
        return this.$parent.icon
      }
      return this.icon
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
