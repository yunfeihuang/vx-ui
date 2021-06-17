<template>
  <div :class="classes" @focusin="handleFocusIn" @focusout="handleFocusOut">
    <label class="vx-input--inner">
      <slot name="prepend"></slot>
      <div class="vx-input--area">
        <slot v-if="$slots.input" name="input"></slot>
        <input v-else
          class="vx-input--control"
          v-bind="$props"
          :value="modelValue"
          :type="nativeType"
          v-on="listeners"/>
      </div>
      <template v-if="!$slots.append">
        <button
          tabindex="-2"
          type="button"
          v-show="!!modelValue && clearable && !disabled"
          class="vx-input--clearable-button"
          @click.stop.prevent="handleClear">
          <i class="vx-input--clearable-icon"></i>
        </button>
      </template>
      <slot name="append"></slot>
      <vx-arrow v-if="arrow" v-bind="arrowProps" direction="down"/>
    </label>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { input } from '@/utils/mixins'
import VxArrow from '../arrow'

export default {
  name: 'VxInput',
  components: {
    VxArrow
  },
  props: {
    ...input.props,
    onClear: {
      type: Function
    }
  },
  setup (props, { emit }) {
    let isFocus = ref(false)
    const classes = computed({
      get () {
        return [
        'vx-input--wrapper',
        `vx-input--size-${props.size}`,
        {
          'is-focus': isFocus.value,
          'is-clearable': !!props.modelValue && props.clearable,
          'vx-input--prepend': context.slots.prepend,
          'vx-input--append': context.slots.append,
          'is-disabled': props.disabled,
          'is-border': props.border,
          'is-custom': context.slots.input
        }
      ]
      }
    })
    const emit = val => {
      emit('update:modelValue', val)
    }
    const handleClear = () => {
      if (props.onClear) {
        props.onClear()
      } else {
        emit('')
      }
    }
    const listeners = {
      change: e => {
        emit(e.target.value)
      },
      focus: () => {
        isFocus.value = true
      },
      blur: () => {
        isFocus.value = false
      }
    }

    return {
      classes,
      handleClear,
      listeners
    }
  }
}
</script>
