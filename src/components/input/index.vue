<template>
  <label :class="classes" @focusin="handleFocus" @focusout="handleBlur">
    <slot name="icon"></slot>
    <slot v-if="$slots.default"></slot>
    <input
      v-else
      :type="nativeType"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="value"
      :disabled="disabled"
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
    <transition name="input-clear-fade">
      <button
        type="button"
        v-show="clear&&isFocus"
        class="vx-input-clear-button"
        @click="handleClear"
        >
        <i class="vx-input-clear-icon"></i>
      </button>
    </transition>
  </label>
</template>

<script>
import { input } from 'utils/mixins'
export default {
  componentName: 'XInput',
  mixins: [input],
  computed: {
    classes () {
      return [
        'vx-input-wrapper',
        {
          'vx-input-focus': this.isFocus,
          'vx-input-clear': !!this.value && this.clear
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
      this.clear && this.$el.classList.remove('vx-input-clear')
      this.$emit('change', '').$emit('input', '')
      this.eDispatch('ElFormItem', 'el.form.change', [''])
    },
    handleInput (e) {
      if (e.target.value) {
        this.clear && this.$el.classList.add('vx-input-clear')
      } else {
        this.clear && this.$el.classList.remove('vx-input-clear')
      }
      this.$emit('input', e.target.value)
      this.eDispatch('ElFormItem', 'el.form.change', [e.target.value])
    }
  }
}
</script>
