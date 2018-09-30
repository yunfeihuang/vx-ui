<template>
  <div :class="['vx-switch--wrapper', `vx-switch--size-${size}`, {'is-disabled': disabled, 'vx-switch--small': small}]">
    <input
      :name="name"
      :checked="onValue == value"
      type="checkbox"
      @change="handleChange"
      />
    <button type="button" tabindex="-2"></button>
  </div>
</template>

<script>
import { input } from 'utils/mixins'
export default {
  componentName: 'XSwitch',
  mixins: [input],
  props: {
    ...input.props,
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    onValue: {
      default: true
    },
    offValue: {
      default: false
    },
    small: {
      type: Boolean
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    handleChange (e) {
      let value = e.target.checked ? this.onValue : this.offValue
      this.$emit('input', value).$emit('change', value)
    }
  }
}
</script>
