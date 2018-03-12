const button = {
  props: {
    disabled: {
      type: [String, Boolean]
    },
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  }
}

const input = {
  inject: ['xFormItem'],
  props: {
    disabled: {
      type: [String, Boolean]
    },
    clear: {
      type: [String, Boolean],
      default: true
    },
    nativeType: {
      type: String,
      default: 'text'
    },
    readonly: {
      type: [String, Boolean]
    },
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    autocomplete: {
      type: String
    },
    autofocus: {
      type: String
    },
    maxlength: {
      type: String
    },
    name: {
      type: String,
      default () {
        return Math.random().toString(36).substr(2)
      }
    },
    required: {
      type: [String, Boolean]
    },
    checked: {
      type: [String, Boolean]
    },
    pattern: {
      type: String
    },
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleFocus (e) {
      this.isFocus = true
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.isFocus = false
      this.$emit('blur', e)
    },
    handleChange (e) {
      this.$emit('change', e.target.value)
    },
    handleInput (e) {
      this.$emit('input', e.target ? e.target.value : e)
    },
    handleKeyup (e) {
      e.keyCode === 13 && this.$emit('keyenter', e)
      this.$emit('keyup', e)
    },
    handleKeydown (e) {
      this.$emit('keydown', e)
    },
    handleInvalid (e) {
      this.$emit('invalid', e)
    }
  }
}

const tab = {
  mounted () {
    if (!this.$children) return
    this.childLength = this.$children.length
    this.$children.forEach((item, i) => {
      this.$children[i].$on('change', this.handleChange)
    })
    this.afterMounted && this.afterMounted()
  },
  props: {
    active: {
      type: [Number, String, Object],
      required: true
    },
    activeClass: {
      type: [String, Array],
      default: ''
    }
  }
}

const historyPush = {
  props: {
    history: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getPushURL () {
      let array = [window.location.href.split('#')[0], window.location.hash]
      array.push(window.location.hash ? (window.location.href.indexOf('?') === -1 ? '?' : '&') : '#')
      array.push('popup=' + Math.random().toString(36).substr(2))
      return array.join('')
    },
    pushState () {
      if (this.history && window.location.href.indexOf('popup=') === -1) {
        window.history.pushState({}, '', this.getPushURL())
        let handlePopstate = this.handlePopstate = () => {
          this.$emit('close')
          this.popStateBack && this.popStateBack()
          window.removeEventListener('popstate', handlePopstate)
        }
        window.addEventListener('popstate', handlePopstate)
      }
    },
    goBack () {
      window.removeEventListener('popstate', this.handlePopstate)
      this.history && window.location.href.indexOf('popup=') > -1 && history.back()
    }
  }
}

export {
  button,
  input,
  tab,
  historyPush
}
