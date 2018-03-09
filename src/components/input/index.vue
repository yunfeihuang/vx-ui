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
        :class="$cssPrefix + 'input-clear-button'"
        @click="handleClear"
        >
        <icon>&#xe641;</icon>
      </button>
    </transition>
  </label>
</template>

<script>
import { input } from 'utils/mixins.js'
import Icon from '../icon'
export default {
  componentName: 'XInput',
  components: {
    Icon
  },
  mixins: [input],
  computed: {
    classes () {
      let classes = {}
      classes[this.$cssPrefix + 'input-focus'] = this.isFocus
      classes[this.$cssPrefix + 'input-clear'] = !!this.value && this.clear
      return [
        this.$cssPrefix + 'input-wrapper',
        classes
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
      this.clear && this.$el.classList.remove(this.$cssPrefix + 'input-clear')
      this.$emit('change', '').$emit('input', '')
    },
    handleInput (e) {
      if (e.target.value) {
        this.clear && this.$el.classList.add(this.$cssPrefix + 'input-clear')
      } else {
        this.clear && this.$el.classList.remove(this.$cssPrefix + 'input-clear')
      }
      this.$emit('input', e.target.value)
    }
  }
}
</script>
