<template>
  <label :class="classes">
    <input :type="myType" :name="name" :value="value" :checked="myChecked" @change="handleChange($event, value)"/>
    <slot v-if="!$slots['default']" v-bind="{checked: myChecked, value: value, disabled: myDisabled}"></slot>
    <template v-else>
      <i :class="['vx-checkbox--icon', getIconStyle ? `is-${getIconStyle}` : '']" ></i>
      <span class="vx-checkbox--text">
        <slot></slot>
      </span>
    </template>
  </label>
</template>

<script>
import { input } from '@/utils/mixins'
export default {
  name: 'VxCheckbox',
  props: {
    ...input.props,
    value: {},
    iconPosition: {
      type: String,
      default: 'left'
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    iconStyle: {
      type: String
    },
    onValue: {
      type: String
    },
    offValue: {
      type: String
    },
    inline: {
      type: Boolean
    },
    exclusive: {
      type: Boolean
    }
  },
  computed: {
    classes () {
      return [
        'vx-checkbox',
        {
          'is-checked': this.myChecked,
          'is-disabled': this.myDisabled,
          'is-inline': this.myInline,
          'is-icon-position-right': this.iconPosition === 'right' || this.$parent.iconPosition === 'right'
        }
      ]
    },
    isParent () {
      return this.$parent && this.$parent.$options && this.$parent.$options.name === 'VxCheckboxGroup'
    },
    getIconStyle () {
      return this.iconStyle || this.$parent.iconStyle
    },
    myChecked () {
      if (this.isParent) {
        if (this.$parent.modelValue instanceof Array) {
          return this.$parent.modelValue.indexOf(this.value) > -1
        } else {
          return this.$parent.modelValue === this.value
        }
      } else {
        return this.checked
      }
    },
    myType () {
      if (this.isParent) {
        return this.$parent.max === 1 ? 'radio' : 'checkbox'
      } else {
        return this.type
      }
    },
    myDisabled () {
      let disabled = this.disabled
      if (this.isParent && this.$parent.max > 1 && this.$parent.modelValue.length >= this.$parent.max) {
        return this.$parent.modelValue.indexOf(this.value) === -1
      }
      return disabled
    },
    myInline () {
      if (this.isParent) {
        return this.inline || this.$parent.inline
      }
      return this.inline
    }
  },
  methods: {
    handleChange (e, val) {
      if (this.isParent) {
        this.$parent.handleChange(e, val)
      } else {
        this.$emit('update:checked', e.target.checked)
        this.$emit('change', e)
        this.offValue !== undefined && this.onValue !== undefined && this.$emit('update:modelValue', e.target.checked ? this.onValue : this.offValue)
      }
    }
  }
}
</script>
