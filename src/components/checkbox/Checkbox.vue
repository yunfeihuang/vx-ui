<template>
  <label :class="classes">
    <input :type="myType" :name="name" :value="value" :checked="myChecked" @change="handleChange"/>
    <template v-if="$slots['default']">
      <i :class="['vx-checkbox--icon', getIconStyle ? `is-${getIconStyle}` : '']" ></i>
      <span class="vx-checkbox--text">
        <slot></slot>
      </span>
    </template>
    <slot v-else v-bind="{checked: myChecked, disabled: myDisabled}"></slot>
  </label>
</template>

<script>
import { input } from 'utils/mixins'
export default {
  componentName: 'Checkbox',
  mixins: [input],
  props: {
    ...input.props,
    direction: {
      type: String,
      default: 'normal'
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
          'vx-checkbox--reverse': this.direction === 'reverse' || this.$parent.direction === 'reverse'
        }
      ]
    },
    getIconStyle () {
      return this.iconStyle || this.$parent.iconStyle
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
    },
    myInline () {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckboxGroup') {
        return this.inline || this.$parent.inline
      }
      return this.inline
    }
  },
  methods: {
    handleChange (e) {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckboxGroup') {
        this.$parent.handleChange(e)
      } else {
        this.$emit('update:checked', e.target.checked).$emit('change', e)
        this.offValue !== undefined && this.onValue !== undefined && this.$emit('input', e.target.checked ? this.onValue : this.offValue)
      }
    }
  }
}
</script>
