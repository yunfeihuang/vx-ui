<template>
  <div :class="classes" @focusin="handleFocus" @focusout="handleBlur">
    <flexbox tag="label" align="center" class="vx-input-inner">
      <slot name="prepend"></slot>
      <flexbox-item>
      <input
        :type="nativeType"
        :placeholder="placeholder"
        :readonly="readonly"
        :value="value"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :maxlength="maxlength"
        :name="name"
        :required="required"
        :pattern="pattern"
        @keyup="handleKeyup"
        @keydown="handleKeydown"
        @change="handleChange"
        @input="handleInput"
        @invalid="handleInvalid"
        />
      </flexbox-item>
      <transition name="input-clear-fade" v-if="!$slots.append">
        <button
          type="button"
          v-show="!!value && clear"
          class="vx-input-clear-button"
          @click="handleClear"
          >
          <i class="vx-input-clear-icon"></i>
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
  computed: {
    classes () {
      return [
        'vx-input-wrapper',
        {
          'is-focus': this.isFocus,
          'is-clear': !!this.value && this.clear,
          'vx-input-prepend': this.$slots.prepend,
          'vx-input-append': this.$slots.append,
          'is-disabled': this.disabled
        }
      ]
    }
  },
  data () {
    return {
      isFocus: false
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
