<template>
  <div :class="classes" @focusin="handleFocusIn" @focusout="handleFocusOut">
    <flexbox tag="label" align="center" class="vx-input--inner">
      <slot name="prepend"></slot>
      <flexbox-item>
      <input
        v-bind="$$props"
        :type="nativeType"
        v-on="$$listeners"
        />
      </flexbox-item>
      <transition name="input-clear-fade" v-if="!$slots.append">
        <button
          tabindex="-2"
          type="button"
          v-show="!!value && clear && !disabled"
          class="vx-input--clear-button"
          @click="handleClear"
          >
          <i class="vx-input--clear-icon"></i>
        </button>
      </transition>
      <slot name="append"></slot>
      <arrow v-if="arrow && !$slots.append" v-bind="arrowProps" direction="down"/>
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
    ...input.props
  },
  computed: {
    classes () {
      return [
        'vx-input--wrapper',
        {
          'is-focus': this.isFocus,
          'is-clear': !!this.value && this.clear,
          'vx-input--prepend': this.$slots.prepend,
          'vx-input--append': this.$slots.append,
          'is-disabled': this.disabled,
          'is-border': this.border
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
      this.$emit('input', '').$emit('change', '')
      this.eDispatch('ElFormItem', 'el.form.change', [''])
      this.eDispatch('ElFormItem', 'el.form.blur', [''])
    }
  }
}
</script>
