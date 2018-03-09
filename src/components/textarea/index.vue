<template>
  <label :class="classes">
    <div :class="[$cssPrefix+'textarea-shadow']"></div>
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
  </label>
</template>

<script>
import { input } from 'utils/mixins.js'
export default {
  componentName: 'XTextarea',
  mixins: [input],
  computed: {
    classes () {
      let styles = {}
      styles[this.$cssPrefix + 'textarea-focus'] = this.isFocus
      return [
        this.$cssPrefix + 'textarea-wrapper',
        styles
      ]
    }
  },
  mounted () {
    this.$textarea = this.$el.querySelector('textarea')
    this.$shadow = this.$el.querySelector('.' + this.$cssPrefix + 'textarea-shadow')
    this.renderAutoHeight(this.$textarea.value)
  },
  data () {
    return {
      isFocus: false
    }
  },
  methods: {
    handleInput (e) {
      this.renderAutoHeight(e.target.value)
      this.$emit('input', e.target.value)
    },
    renderAutoHeight (value) {
      requestAnimationFrame(() => {
        this.$shadow.innerHTML = value.replace(/(\r|\n)$/, '<br/><span style="color:transparent">s</span>').replace(/(\r|\n)/g, '<br/>')
        this.$el.style.height = this.$shadow.clientHeight + 'px'
      })
    }
  }
}
</script>
