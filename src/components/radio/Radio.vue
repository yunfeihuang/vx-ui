<template>
  <label :class="['vx-radio', {'is-disabled': disabled, 'is-checked': myChecked}]" >
    <input type="radio" :name="name" :value="value" :disabled="disabled" :checked="myChecked" @change="handleChange"/>
    <slot v-if="$scopedSlots['default']" v-bind="{checked: myChecked, disabled: disabled}"></slot>
    <template v-else>
      <i class="vx-radio--icon"></i>
      <span class="vx-radio--text">
        <slot></slot>
      </span>
    </template>
  </label>
</template>

<script>
import { input } from 'utils/mixins'
export default {
  name: 'Radio',
  componentName: 'Radio',
  mixins: [input],
  props: {
    ...input.props
  },
  computed: {
    myChecked () {
      if (this.$parent.value) {
        return this.$parent.value === this.value
      } else {
        return this.checked
      }
    }
  },
  methods: {
    handleChange () {
      if (this.$parent && this.$parent.$options && this.$parent.$options.componentName === 'RadioGroup') {
        this.$parent.handleChange(this.value)
      } else {
        this.$emit('input', this.value).$emit('change', this.value)
      }
    }
  }
}
</script>
