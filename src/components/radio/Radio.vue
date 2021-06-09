<template>
  <label :class="['vx-radio', {'is-disabled': disabled, 'is-checked': myChecked}]" >
    <input type="radio" :value="value" :disabled="disabled" :checked="myChecked" @change="handleChange"/>
    <slot v-if="!$slots['default']" v-bind="{checked: myChecked, value: value, disabled: disabled}"></slot>
    <template v-else>
      <i class="vx-radio--icon"></i>
      <span class="vx-radio--text">
        <slot></slot>
      </span>
    </template>
  </label>
</template>

<script>
import { input } from '@/utils/mixins'
export default {
  name: 'VxRadio',
  props: {
    ...input.props,
    value: {}
  },
  computed: {
    myChecked () {
      if (this.$parent && this.$parent.modelValue) {
        return this.$parent.modelValue === this.value
      } else {
        return this.checked
      }
    }
  },
  methods: {
    handleChange () {
      if (this.$parent && this.$parent.$options && this.$parent.$options.name === 'VxRadioGroup') {
        this.$parent.handleChange(this.value)
      } else {
        this.$emit('input', this.value)
        this.$emit('change', this.value)
      }
    }
  }
}
</script>
