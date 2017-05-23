<template>
  <form :class="classes" :style="styles" :action="action" @submit="submitHandler">
    <slot></slot>
  </form>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
import messages from './messages.js'

const validityStateArrayMap = [
  'valueMissing__required',
  'patternMismatch__pattern'
]

export default {
  mixins: [base],
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
      return [cssPrefix + 'form', this.clas]
    },
    messages: messages
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    submitHandler () {
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
        window.toast({
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

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    
  }
</style>
