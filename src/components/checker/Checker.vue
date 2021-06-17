<template>
  <label :class="['vx-checker',{'is-disabled': myDisabled, 'is-checked': myChecked, 'is-icon': myIcon, 'is-block': !myInline}]">
    <input v-if="!fake"
      :type="myType"
      :checked="myChecked"
      :name="name"
      :value="value"
      :disabled="disabled"
      @change="handleChange($event)"
      />
    <slot name="custom" v-if="$slots['custom']" v-bind="{checked: myChecked, value: value, disabled: myDisabled}"></slot>
    <button class="vx-checker-button" v-else type="button" tabindex="-2">
      <span class="vx-checker-text"><slot></slot></span>
    </button>
  </label>
</template>

<script>
import { input } from '@/utils/mixins'
import { inject } from 'vue'

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
  setup (props, { emit }) {
    const vxCheckerGroup = inject('vxCheckerGroup')
    return {
      vxCheckerGroup,
      handleChange (e) {
        let checked = e.target.checked
        if (vxCheckerGroup && vxCheckerGroup.handleChange) {
          vxCheckerGroup.handleChange(e, props)
        } else {
          props.offValue !== undefined && props.onValue !== undefined && emit('update:modelValue', checked ? props.onValue : props.offValue)
          emit('update:checked', checked)
        }
      }
    }
  },
  computed: {
    isParent () {
      return this.vxCheckerGroup ? true : false
    },
    myChecked () {
      if (this.isParent) {
        if (this.vxCheckerGroup.modelValue.value instanceof Array) {
          return this.vxCheckerGroup.modelValue.value.indexOf(this.value) > -1
        } else {
          return this.vxCheckerGroup.modelValue.value === this.value
        }
      } else {
        return this.checked
      }
    },
    myType () {
      if (this.isParent) {
        return this.vxCheckerGroup.max.value === 1 ? 'radio' : 'checkbox'
      } else {
        return this.type
      }
    },
    myDisabled () {
      let disabled = this.disabled
      if (this.isParent && this.vxCheckerGroup.max.value > 1 && this.vxCheckerGroup.modelValue.value.length >= this.vxCheckerGroup.max.value) {
        return this.vxCheckerGroup.modelValue.value.indexOf(this.value) === -1
      }
      return disabled
    },
    myInline () {
      if (this.isParent) {
        return this.inline || this.vxCheckerGroup.inline.value
      }
      return this.inline
    },
    myIcon () {
      if (this.isParent) {
        return this.vxCheckerGroup.icon.value
      }
      return this.icon
    }
  },
  methods: {
    handleChange1 (value, e) {
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
