<template>
  <div :class="classes" @focusin="handleFocusIn" @focusout="handleFocusOut">
    <flexbox tag="label" align="center" class="vx-input--inner" :gutter="0">
      <slot name="prepend"></slot>
      <flexbox-item class="vx-input--area">
        <slot v-if="$slots.input" name="input"></slot>
        <input v-else
          class="vx-input--control"
          v-bind="$$props"
          :type="nativeType"
          v-on="$$listeners"/>
      </flexbox-item>
      <template v-if="!$slots.append">
        <button
          tabindex="-2"
          type="button"
          v-show="!!value && clearable && !disabled"
          class="vx-input--clearable-button"
          @click.stop.prevent="handleClear">
          <i class="vx-input--clearable-icon"></i>
        </button>
      </template>
      <slot name="append"></slot>
      <arrow v-if="arrow && !$slots.append && !value" v-bind="arrowProps" direction="down"/>
    </flexbox>
  </div>
</template>

<script>
import { input } from 'utils/mixins'
import {Flexbox, FlexboxItem} from '../flexbox'
import Arrow from '../arrow'
export default {
  componentName: 'XInput',
  components: {
    Flexbox,
    FlexboxItem,
    Arrow
  },
  mixins: [input],
  props: {
    ...input.props,
    onClear: {
      type: Function
    }
  },
  computed: {
    classes () {
      return [
        'vx-input--wrapper',
        `vx-input--size-${this.size}`,
        {
          'is-focus': this.isFocus,
          'is-clearable': !!this.value && this.clearable,
          'vx-input--prepend': this.$slots.prepend,
          'vx-input--append': this.$slots.append,
          'is-disabled': this.disabled,
          'is-border': this.border,
          'is-custom': this.$slots.input
        }
      ]
    },
    $$props () {
      return {
        ...this.$props,
        ...this.$attrs
      }
    },
    $$listeners () {
      return {
        ...this.$listeners,
        change: this.handleChange,
        input: this.handleInput
      }
    }
  },
  methods: {
    handleClear (e) {
      if (this.onClear) {
        this.onClear()
      } else {
        this.$emit('input', '').$emit('change', '')
        this.eDispatch('ElFormItem', 'el.form.change', [''])
        this.eDispatch('ElFormItem', 'el.form.blur', [''])
      }
    }
  }
}
</script>
