<template>
  <label :class="['vx-textarea--wrapper', `vx-textarea--size-${size}`, {'is-disabled':disabled,'is-focus': isFocus, 'vx-textarea--enter-number': showWordNumber}]" @focusin="handleFocusIn" @focusout="handleFocusOut">
    <div class="vx-textarea--inner">
      <div class="vx-textarea--shadow"></div>
      <textarea
        v-bind="$$props"
        v-on="$attrs"
        :value="modelValue"
        @input="handleInput"
        ></textarea>
      </div>
      <em v-if="showWordNumber && maxlength">
        {{value.length}}/{{maxlength}}
      </em>
  </label>
</template>

<script>
import { input } from '@/utils/mixins'
export default {
  name: 'VxTextarea',
  mixins: [input],
  props: {
    ...input.props,
    showWordNumber: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    $$props () {
      return {
        ...this.$props,
        ...this.$attrs
      }
    }
  },
  watch: {
    modelValue (value) {
      this.$$textarea.value !== value && this.renderAutoHeight(value)
    }
  },
  mounted () {
    this.$$textarea = this.$el.querySelector('textarea')
    this.$$inner = this.$el.querySelector('.vx-textarea--inner')
    this.$$shadow = this.$el.querySelector('.vx-textarea--shadow')
    this.renderAutoHeight(this.$$textarea.value)
    window.addEventListener('resize', this.handleResize, false)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.renderAutoHeight(this.$$textarea.value)
    },
    handleInput (e) {
      let value = e.target.value
      this.renderAutoHeight(value)
      this.$emit('update:modelValue', value)
    },
    renderAutoHeight (value) {
      requestAnimationFrame(() => {
        this.$$shadow.innerHTML = value.replace(/(\r|\n)$/, '<br/><span style="color:transparent">s</span>').replace(/(\r|\n)/g, '<br/>')
        this.$$inner.style.height = this.$$shadow.offsetHeight + 'px'
      })
    }
  }
}
</script>
