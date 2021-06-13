const button = {
  props: {
    disabled: {
      type: Boolean
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    plain: {
      type: Boolean
    },
    loadingColor: {
      type: Object,
      default () {
        return {
          default: '#d6d6d6',
          danger: '#e04b00',
          warning: '#ff9900'
        }
      }
    },
    loading: {
      type: Boolean
    },
    ripple: {
      type: Boolean
    }
  }
}

const input = {
  inject: {
    vxFormItem: { default: 'vxFormItem' }
  },
  props: {
    disabled: {
      type: Boolean
    },
    clearable: {
      type: Boolean,
      default: true
    },
    nativeType: {
      type: String,
      default: 'text'
    },
    readonly: {
      type: Boolean
    },
    modelValue: {
      type: [String, Number]
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
      type: Number
    },
    name: {
      type: String,
      default () {
        return Math.random().toString(36).substr(2)
      }
    },
    checked: {
      type: Boolean
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: Boolean,
      default: false
    },
    arrowProps: {
      type: Object
    },
    border: {
      type: Boolean,
      default: true
    },
    autoIntoView: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      isFocus: false
    }
  },
  methods: {
    handleFocusIn (e) {
      this.isFocus = true
      let node = e.target
      if (this.autoIntoView && node.ontouchstart !== undefined) {
        window.addEventListener('resize', () => {
          node.scrollIntoView && node.scrollIntoView()
        }, {
          once: true
        })
      }
    },
    handleFocusOut (e) {
      this.isFocus = false
      this.eDispatch('ElFormItem', 'el.form.blur', [e.target.value])
    },
    handleChange (e) {
      this.$emit('change', e.target.value)
    },
    handleInput (e) {
      let value = e.target ? e.target.value : e
      this.$emit('update:modelValue', value)
      this.eDispatch('ElFormItem', 'el.form.change', [value])
    },
    eDispatch (...arg) { // element-ui form表单校验
      this.validateEvent && this.dispatch && this.dispatch(...arg)
    }
  }
}

const tab = {
  methods: {
    change (name) {
      this.active !== name && this.$emit('update:active', name)
    }
  },
  props: {
    active: {
      type: [Number, String, Object],
      required: true
    },
    layout: {
      type: String,
      default: 'default'
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
      let hash = window.location.hash
      this.pushString = 'popup=' + Math.random().toString(36).substr(2)
      let array = [window.location.href.split('#')[0], hash]
      array.push(hash ? (hash.indexOf('?') === -1 && hash.indexOf('=') === -1 ? '?' : '&') : '#')
      array.push(this.pushString)
      return array.join('')
    },
    pushState () {
      if (this.history) {
        if (this.pushString && this.isCurrentPopup()) {
          window.history.back()
        }
        setTimeout(() => {
          window.history.pushState({}, '', this.getPushURL())
          window.addEventListener('popstate', this.handlePopstate)
        }, 16)
      }
    },
    handlePopstate () {
      if (window.location.href.indexOf(this.pushString) === -1) {
        this.$emit('update:open', false)
        this.$emit('close')
        this.popStateBack && this.popStateBack()
        window.removeEventListener('popstate', this.handlePopstate)
      }
    },
    goBack () {
      if (this.history && this.isCurrentPopup()) {
        window.removeEventListener('popstate', this.handlePopstate)
        history.back()
      }
    },
    isCurrentPopup () {
      return window.location.href.indexOf(this.pushString) === window.location.href.length - this.pushString.length
    }
  }
}

export {
  button,
  input,
  tab,
  historyPush
}
