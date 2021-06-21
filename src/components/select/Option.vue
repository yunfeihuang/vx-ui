<template>
  <label :class="classes">
    <input :type="myType" :name="name" :value="value" :checked="myChecked" @change="handleChange($event)"/>
    <i :class="['vx-checkbox--icon', getIconStyle ? `is-${getIconStyle}` : '']" ></i>
    <span v-if="$slots['default']" class="vx-checkbox--text">
      <slot></slot>
    </span>
    <span v-else class="vx-checkbox--text">
      {{label}}
    </span>
  </label>
</template>

<script>
import { input } from '@/utils/mixins'
import { inject } from 'vue'

export default {
  name: 'VxOption',
  props: {
    ...input.props,
    value: {},
    label: {},
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
    exclusive: {
      type: Boolean
    }
  },
  setup (props) {
    const vxCheckboxGroup = inject('vxCheckboxGroup')
    return {
      vxCheckboxGroup,
      handleChange (e) {
        if (vxCheckboxGroup && vxCheckboxGroup.handleChange) {
          vxCheckboxGroup.handleChange(e, props)
        }
      }
    }
  },
  computed: {
    classes () {
      return [
        'vx-checkbox',
        {
          'is-checked': this.myChecked,
          'is-disabled': this.myDisabled,
          'is-icon-position-right': this.getIconPosition
        }
      ]
    },
    getIconPosition () {
      if (this.iconPosition === 'right') {
        return true
      }
      if (this.vxCheckboxGroup && this.vxCheckboxGroup.iconPosition.value === 'right') {
        return true
      }
      return false
    },
    isParent () {
      return this.vxCheckboxGroup ? true : false
    },
    getIconStyle () {
      if (this.iconStyle) {
        return this.iconStyle
      }
      if (this.vxCheckboxGroup && this.vxCheckboxGroup.iconStyle.value) {
        return this.vxCheckboxGroup.iconStyle.value
      }
      return false
    },
    myChecked () {
      if (this.isParent) {
        if (this.exclusive && this.value === undefined && this.vxCheckboxGroup.modelValue.value.length) {
          return false
        } else {
          if (this.vxCheckboxGroup.modelValue.value instanceof Array) {
            return this.vxCheckboxGroup.modelValue.value.indexOf(this.value) > -1
          } else {
            return this.vxCheckboxGroup.modelValue.value === this.value
          }
        }
      } else {
        return this.checked
      }
    },
    myType () {
      if (this.isParent) {
        return this.vxCheckboxGroup.max.value === 1 ? 'radio' : 'checkbox'
      } else {
        return this.type
      }
    },
    myDisabled () {
      let disabled = this.disabled
      if (this.isParent && this.vxCheckboxGroup.max.value > 1 && this.vxCheckboxGroup.modelValue.value.length >= this.vxCheckboxGroup.max.value) {
        return this.vxCheckboxGroup.modelValue.value.indexOf(this.value) === -1
      }
      return disabled
    }
  }
}
</script>
