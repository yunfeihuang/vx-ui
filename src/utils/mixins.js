const base = {
  props: {
    clas: {
      type: [String, Array]
    },
    styles: {
      type: [String, Object]
    }
  }
}

const button = {
  props: {
    disabled: {
      type: [String, Boolean]
    },
    type: {
      type: String,
      validator (value) {
        return ['primary', 'warning', 'dashed'].indexOf(value) > -1
      }
    },
    htmlType: {
      type: String,
      default: 'button'
    }
  }
}

const input = {
  props: {
    disabled: {
      type: [String, Boolean]
    },
    clear: {
      type: [String, Boolean],
      default: true
    },
    htmlType: {
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
      type: String
    },
    required: {
      type: [String, Boolean]
    },
    checked: {
      type: [String, Boolean]
    },
    pattern: {
      type: String
    }
  },
  methods: {
    focusHandler (e) {
      this.isFocus = true
      this.$emit('on-focus', e)
    },
    blurHandler (e) {
      this.isFocus = false
      this.$emit('on-blur', e)
    },
    changeHandler (e) {
      this.$emit('on-change', e.target.value)
    },
    inputHandler (e) {
      this.$emit('input', e.target.value)
    },
    keyupHandler (e) {
      e.keyCode === 13 && this.$emit('on-keyenter', e)
      this.$emit('on-keyup', e)
    },
    keydownHandler (e) {
      this.$emit('on-keydown', e)
    },
    invalidHandler (e) {
      this.$emit('invalid', e)
    }
  }
}

export {
  base,
  button,
  input
}
