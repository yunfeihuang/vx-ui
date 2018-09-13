<template>
  <label :class="['vx-textarea-wrapper',{'is-disabled':disabled,'is-focus': isFocus, 'vx-textarea-enter-number': enterNumber}]" @focusin="handleFocusIn" @focusout="handleFocusOut">
    <div class="vx-textarea-inner">
      <div class="vx-textarea-shadow"></div>
      <textarea
        v-bind="$$props"
        v-on="$$listeners"
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
    ...input.props,
    enterNumber: {
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
    },
    $$listeners () {
      return {
        ...this.$listeners,
        change: this.handleChange,
        input: this.handleInput
      }
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
      let value = e.target.value
      this.renderAutoHeight(value)
      this.$emit('input', value)
      this.eDispatch('ElFormItem', 'el.form.change', [value])
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
