<template>
  <label :class="classes" >
    <input :type="myType" :name="name" :value="value" :checked="myChecked" @change="handleChange"/>
    <rem-to-px tag="i" :class="['vx-checkbox-icon', getIconStyle ? `is-${getIconStyle}` : '']" :height="getIconStyle==='checkbox' ? 0.36 : 0.4" :width="getIconStyle==='checkbox' ? 0.36 : 0.4"></rem-to-px>
    <span class="vx-checkbox-text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { input } from 'utils/mixins'
import RemToPx from '../remtopx'
export default {
  componentName: 'Checkbox',
  components: {
    RemToPx
  },
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
          'is-active': this.myChecked,
          'is-disabled': this.myDisabled,
          'is-inline': this.myInline,
          'vx-checkbox-reverse': this.direction === 'reverse' || this.$parent.direction === 'reverse'
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
        console.log('this.$parent.inline', this.$parent.inline)
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
