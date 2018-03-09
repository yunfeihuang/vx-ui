<template>
  <form :class="classes" :action="action" @submit="handleSubmit">
    <slot></slot>
  </form>
</template>

<script>
import messages from './messages.js'

const validityStateArrayMap = [
  'valueMissing__required',
  'patternMismatch__pattern'
]

export default {
  componentName: 'XForm',
  props: {
    action: {
      type: String
    },
    validator: {
      type: Function
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'form']
    }
  },
  data () {
    return {
      messages: messages
    }
  },
  methods: {
    handleSubmit (e) {
      if (this.validator) {
        let message = this.validator()
        if (message) {
          this.showValidityMessage(message)
        } else {
          this.$emit('submit')
        }
      } else {
        this.$emit('submit')
      }
      e.preventDefault()
    },
    getValidityMessage (validityState, name) {
      let message = ''
      validityStateArrayMap.forEach((item) => {
        if (!message && validityState[item.split('__')[0]]) {
          message = messages[item.split('__')[1]](name)
        }
      })
      return message
    },
    showValidityMessage (message) {
      if (!this.invalid) {
        this.invalid = true
        this.$toast({
          content: message,
          onClose: () => {
            this.invalid = false
          }
        })
      }
    }
  }
}
</script>

