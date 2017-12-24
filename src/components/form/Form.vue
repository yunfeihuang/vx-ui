<template>
  <form :class="classes" :action="action" @submit="submitHandler">
    <slot></slot>
  </form>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import messages from './messages.js'

const validityStateArrayMap = [
  'valueMissing__required',
  'patternMismatch__pattern'
]

export default {
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
      return [cssPrefix + 'form']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      messages: messages
    }
  },
  methods: {
    submitHandler (e) {
      if (this.validator) {
        let message = this.validator()
        if (message) {
          this.showValidityMessage(message)
        } else {
          this.$emit('on-submit')
        }
      } else {
        this.$emit('on-submit')
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
        window.$toast({
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

