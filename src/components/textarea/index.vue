<template>
  <label :class="classes">
    <div :class="['vx-textarea-shadow']"></div>
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
      <em :class="['vx-textarea-enter-number']" v-if="enterNumber && maxlength">
        {{value.length}}/{{maxlength}}
      </em>
  </label>
</template>

<script>
import { input } from 'utils/mixins.js'
export default {
  componentName: 'XTextarea',
  mixins: [input],
  props: {
    enterNumber: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      let styles = {}
      styles['vx-textarea-focus'] = this.isFocus
      return [
        'vx-textarea-wrapper',
        styles
      ]
    }
  },
  mounted () {
    this.$$textarea = this.$el.querySelector('textarea')
    this.$$shadow = this.$el.querySelector('.vx-textarea-shadow')
    this.renderAutoHeight(this.$$textarea.value)
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
        this.$$shadow.innerHTML = value.replace(/(\r|\n)$/, '<br/><span style="color:transparent">s</span>').replace(/(\r|\n)/g, '<br/>')
        this.$el.style.height = this.$$shadow.offsetHeight + 'px'
      })
    }
  }
}
</script>
