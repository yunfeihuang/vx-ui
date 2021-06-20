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
  }
}

const useHistory = (props, { emit }, popStateBack) => {
  let pushString = ''
  const getPushURL = () => {
    let hash = window.location.hash
    pushString = 'popup=' + Math.random().toString(36).substr(2)
    let array = [window.location.href.split('#')[0], hash]
    array.push(hash ? (hash.indexOf('?') === -1 && hash.indexOf('=') === -1 ? '?' : '&') : '#')
    array.push(pushString)
    return array.join('')
  }
  const isCurrentPopup = () => {
    return window.location.href.indexOf(pushString) === window.location.href.length - pushString.length
  }
  const handlePopstate = () => {
    if (window.location.href.indexOf(pushString) === -1) {
      emit('update:open', false)
      emit('close')
      popStateBack && popStateBack()
      window.removeEventListener('popstate', handlePopstate)
    }
  }
  const pushState = () => {
    if (props.history) {
      if (pushString && isCurrentPopup()) {
        window.history.back()
      }
      setTimeout(() => {
        window.history.pushState({}, '', getPushURL())
        window.addEventListener('popstate', handlePopstate)
      }, 16)
    }
  }
  const goBack = () => {
    if (props.history && isCurrentPopup()) {
      window.removeEventListener('popstate', handlePopstate)
      history.back()
    }
  }
  return {
    pushState,
    goBack
  }
}

export {
  button,
  input,
  useHistory
}
