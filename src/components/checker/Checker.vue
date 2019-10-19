<template>
  <label :class="['vx-checker',{'is-disabled': myDisabled, 'is-checked': myChecked, 'is-icon': myIcon, 'is-block': myBlock}]">
    <input v-if="!fake"
      :type="myType"
      :checked="myChecked"
      :name="name"
      :value="value"
      :disabled="disabled"
      @change="handleChange(value, $event)"
      />
    <slot v-if="$scopedSlots['default']" v-bind="{checked: myChecked, value: value, disabled: myDisabled}"></slot>
    <button class="vx-checker-button" v-else type="button" tabindex="-2">
      <span class="vx-checker-text"><slot></slot></span>
    </button>
  </label>
</template>

<script>
import { input } from 'utils/mixins'

export default {
  name: 'Checker',
  componentName: 'Checker',
  mixins: [input],
  props: {
    ...input.props,
    value: {
      type: [String, Number]
    },
    icon: {
      type: Boolean
    },
    block: {
      type: Boolean
    },
    exclusive: {
      type: Boolean
    },
    fake: {
      type: Boolean
    }
  },
  computed: {
    myChecked () {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckerGroup') {
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
    },
    myBlock () {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckerGroup') {
        return this.$parent.block
      }
      return this.block
    }
  },
  methods: {
    handleChange (value, e) {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'CheckerGroup') {
        this.$parent.handleChange(e, value, this.exclusive)
      } else {
        this.$emit('update:checked', e.target.checked).$emit('change', e)
      }
    }
  }
}
</script>
