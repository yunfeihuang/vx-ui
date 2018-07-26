<template>
  <label :class="['vx-textarea-wrapper',{'vx-textarea-focus': isFocus, 'vx-textarea-enter-number': enterNumber}]">
    <div class="vx-textarea-inner">
      <div class="vx-textarea-shadow"></div>
      <textarea
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :maxlength="maxlength"
        :name="name"
        :required="required"
        :value="value"
        @focus="handleFocus"
        @blur="handleBlur"
        @keyup="handleKeyup"
        @keydown="handleKeydown"
        @change="handleChange"
        @input="handleInput"
        ></textarea>
      </div>
      <em v-if="enterNumber && maxlength">
        {{value.length}}/{{maxlength}}
      </em>
  </label>
</template>

<script>
import { input } from 'utils/mixins'
export default {
  componentName: 'XTextarea',
  mixins: [input],
  props: {
    enterNumber: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isFocus: false
    }
  },
  watch: {
    value (value) {
      this.$$textarea.value !== value && this.renderAutoHeight(value)
    }
  },
  mounted () {
    this.$$textarea = this.$el.querySelector('textarea')
    this.$$shadow = this.$el.querySelector('.vx-textarea-shadow')
    this.renderAutoHeight(this.$$textarea.value)
    window.addEventListener('resize', this.handleResize, false)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.renderAutoHeight(this.$$textarea.value)
    },
    handleInput (e) {
      this.renderAutoHeight(e.target.value)
      this.$emit('input', e.target.value)
    },
    renderAutoHeight (value) {
      requestAnimationFrame(() => {
        this.$$shadow.innerHTML = value.replace(/(\r|\n)$/, '<br/><span style="color:transparent">s</span>').replace(/(\r|\n)/g, '<br/>')
        this.$el.querySelector('.vx-textarea-inner').style.height = this.$$shadow.offsetHeight + 'px'
      })
    }
  }
}
</script>
