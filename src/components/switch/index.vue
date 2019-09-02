<template functional>
  <div :class="['vx-switch--wrapper', `vx-switch--size-${props.size}`, {'is-disabled': props.disabled, 'vx-switch--small': props.small}]">
    <input
      :name="props.name"
      :checked="props.onValue == props.value"
      type="checkbox"
      @change="$options.methods.handleChange(listeners,props.onValue,props.offValue,$event)"
      />
    <button type="button" tabindex="-2"></button>
  </div>
</template>

<script>
import { input } from 'utils/mixins'
export default {
  name: 'XSwitch',
  componentName: 'XSwitch',
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
    handleChange (listeners, onValue, offValue, e) {
      let value = e.target.checked ? onValue : offValue
      listeners['input'] && listeners['input'](value)
      listeners['change'] && listeners['change'](value)
    }
  }
}
</script>
