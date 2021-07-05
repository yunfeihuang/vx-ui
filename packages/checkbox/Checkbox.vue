<template>
  <label :class="classes">
    <input :type="myType" :name="name" :value="value" :checked="myChecked" @change="handleChange($event)"/>
    <slot name="custom" v-if="$slots['custom']" v-bind="{checked: myChecked, value: value, disabled: myDisabled}"></slot>
    <template v-else>
      <i :class="['vx-checkbox--icon', getIconStyle ? `is-${getIconStyle}` : '']" ></i>
      <span class="vx-checkbox--text">
        <slot v-if="$slots.default"></slot>
        <template v-else>{{label}}</template>
      </span>
    </template>
  </label>
</template>

<script>
import { input } from '@/utils/mixins'
import { inject, watch } from 'vue'

export default {
  name: 'VxCheckbox',
  inject: ['vxCheckboxGroup'],
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
    },
    label: {}
  },
  setup (props, { emit, slots }) {
    console.log(slots)
    const vxCheckboxGroup = inject('vxCheckboxGroup')
    if (props.exclusive) {
      vxCheckboxGroup.exclusives.push(props.value)
    }
    watch(() => props.exclusive, val => {
      if (val) {
        vxCheckboxGroup.exclusives.push(props.value)
      } else {
        vxCheckboxGroup.exclusives = vxCheckboxGroup.exclusives.filter(item => item !== val)
      }
    })
    return {
      vxCheckboxGroup,
      handleChange (e) {
        let checked = e.target.checked
        if (vxCheckboxGroup && vxCheckboxGroup.handleChange) {
          vxCheckboxGroup.handleChange(e, props)
        } else {
          props.offValue !== undefined && props.onValue !== undefined && emit('update:modelValue', checked ? props.onValue : props.offValue)
          emit('update:checked', checked)
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
          'is-inline': this.myInline,
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
        if (this.vxCheckboxGroup.modelValue.value instanceof Array) {
          return this.vxCheckboxGroup.modelValue.value.indexOf(this.value) > -1
        } else {
          return this.vxCheckboxGroup.modelValue.value === this.value
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
    },
    myInline () {
      if (this.isParent) {
        return this.inline || this.vxCheckboxGroup.inline.value
      }
      return this.inline
    }
  }
}
</script>
