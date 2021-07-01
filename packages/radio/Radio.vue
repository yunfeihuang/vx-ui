<template>
  <label :class="['vx-radio', {'is-disabled': disabled, 'is-checked': myChecked}]" >
    <input type="radio" :value="value" :disabled="disabled" :checked="myChecked" @change="handleChange"/>
    <slot v-if="$slots['custom']" v-bind="{checked: myChecked, value: value, disabled: disabled}"></slot>
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
import { computed, inject } from 'vue'
export default {
  name: 'VxRadio',
  props: {
    ...input.props,
    value: {}
  },
  setup (props, { emit }) {
    const vxRadioGroup = inject('vxRadioGroup')
    const myChecked = computed(() => {
      if (vxRadioGroup) {
        return vxRadioGroup.modelValue.value === props.value
      } else {
        return props.checked
      }
    })
    return {
      vxRadioGroup,
      myChecked,
      handleChange () {
        if (vxRadioGroup) {
          vxRadioGroup.handleChange(props.value)
        } else {
          emit('update:modelValue', this.value)
        }
      }
    }
  }
}
</script>
