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
    <slot v-if="!$slots['default']" v-bind="{checked: myChecked, value: value, disabled: myDisabled}"></slot>
    <button class="vx-checker-button" v-else type="button" tabindex="-2">
      <span class="vx-checker-text"><slot></slot></span>
    </button>
  </label>
</template>

<script>
import { input } from '@/utils/mixins'

export default {
  name: 'VxChecker',
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
    isParent () {
      return this.$parent && this.$parent.$options && this.$parent.$options.name === 'VxCheckerGroup'
    },
    myChecked () {
      if (this.isParent) {
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
    myIcon () {
      if (this.isParent) {
        return this.$parent.icon
      }
      return this.icon
    },
    myBlock () {
      if (this.isParent) {
        return this.$parent.block
      }
      return this.block
    }
  },
  methods: {
    handleChange (value, e) {
      if (this.isParent) {
        this.$parent.handleChange(e, value, this.exclusive)
      } else {
        this.$emit('update:checked', e.target.checked)
        this.$emit('change', e)
      }
    }
  }
}
</script>
