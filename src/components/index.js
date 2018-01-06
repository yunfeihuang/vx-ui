import './index.scss'
import '../utils/polyfill'
import Vue from 'vue'
import XButton from './button'
import XInput from './input'
import Password from './password'
import Range from './range'
import XTextarea from './textarea'
import XSwitch from './switch'
import {Checkbox, CheckboxGroup} from './checkbox'
import {Radio, RadioGroup} from './radio'
import XSelect from './select'
import Checker from './checker'
import {XForm, FormItem} from './form'
import Field from './field'
import {Actionsheet, ActionsheetItem} from './actionsheet'
import {Swiper, SwiperItem} from './swiper'
import {Marquee, MarqueeItem} from './marquee'
import {Tab, TabItem} from './tab'
import {Tabbar, TabbarItem} from './tabbar'
import {Sidebar, SidebarItem} from './sidebar'
import {Flexbox, FlexboxItem} from './flexbox'
import {ButtonTab, ButtonTabItem} from './button-tab'
import Divider from './divider'
import Group from './group'
import Cell from './cell'
import Confirm from './confirm'
import Prompt from './prompt'
import Alert from './alert'
import Popup from './popup'
import PopupPicker from './popup-picker'
import Toast from './toast'
import XImg from './img'
import ListView from './list-view'
import Ripple from './ripple'
import Search from './search'
import Layout from './layout'
import XNav from './nav'
import XBody from './body'
import XLink from './link'
import Preview from './preview'
import Spinner from './spinner'
import Picker from './picker'
import Badge from './badge'
import Swipeout from './swipeout'
import Rater from './rater'
import DatetimePicker from './datetime-picker'
import DaterangePicker from './daterange-picker'
import Datetime from './datetime'
import Daterange from './daterange'
import Popover from './popover'
import Sticky from './sticky'
import Icon from './icon'

Vue.mixin({
  props: {
    $cssPrefix: {
      type: String,
      default: 'v-'
    }
  }
})

let components = [
  Actionsheet,
  ActionsheetItem,
  Swiper,
  SwiperItem,
  Marquee,
  MarqueeItem,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  Sidebar,
  SidebarItem,
  Flexbox,
  FlexboxItem,
  ButtonTab,
  ButtonTabItem,
  XButton,
  XInput,
  Password,
  Range,
  XForm,
  FormItem,
  Field,
  XTextarea,
  XSwitch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  XSelect,
  Checker,
  Divider,
  Group,
  Cell,
  Confirm,
  Prompt,
  Alert,
  Popup,
  PopupPicker,
  Toast,
  XImg,
  ListView,
  Ripple,
  Search,
  Layout,
  XNav,
  XBody,
  XLink,
  Preview,
  Spinner,
  Picker,
  Badge,
  Swipeout,
  Rater,
  DatetimePicker,
  DaterangePicker,
  Datetime,
  Daterange,
  Popover,
  Sticky,
  Icon
]

const install = (Vue) => {
  components.map(component => {
    component.name && Vue.component(component.name, component)
  })
}

if (process.browser) {
  ((w) => {
    w.$toast = (props, mounted = document.body) => {
      props = Object.assign({
        open: true,
        onClose: () => {
          return true
        }
      }, props)
      let node = document.createElement('div')
      mounted.appendChild(node)
      let vue = new Vue({ //eslint-disable-line
        el: node,
        render (createElement) {
          let content = props.content
          return createElement(Toast, {
            props: {
              ...props
            },
            on: {
              'on-close': this.closeHandler
            },
            scopedSlots: {
              default: props => createElement('div', content)
            }
          })
        },
        data: {props: props},
        methods: {
          closeHandler: () => {
            props.open = props.onClose() === false
            !props.open && setTimeout(() => {
              vue.$destroy()
            }, 1000)
          }
        },
        destroyed: () => {
          requestAnimationFrame(() => {
            vue.$el.remove()
          })
        }
      })
      return vue
    }

    w.$alert = (props, mounted = document.body) => {
      props = Object.assign({
        open: true,
        onConfirm: () => {
          return true
        }
      }, props)
      let node = document.createElement('div')
      mounted.appendChild(node)
      let vue = new Vue({ //eslint-disable-line
        el: node,
        render (createElement) {
          let content = props.content
          return createElement(Alert, {
            props: {
              ...props
            },
            on: {
              'on-confirm': this.confirmHandler,
              'on-close': this.closeHandler
            },
            scopedSlots: {
              default: props => createElement('div', content)
            }
          })
        },
        data: {props: props},
        methods: {
          confirmHandler: () => {
            props.open = props.onConfirm() === false
            !props.open && setTimeout(() => {
              vue.$destroy()
            }, 1000)
          },
          closeHandler: () => {
            props.open = props.onCancel() === false
            !props.open && setTimeout(() => {
              vue.$destroy()
            }, 1000)
          }
        },
        destroyed: () => {
          requestAnimationFrame(() => {
            vue.$el.remove()
          })
        }
      })
      return vue
    }

    w.$confirm = (props, mounted = document.body) => {
      props = Object.assign({
        open: true,
        onConfirm: () => {
          return true
        },
        onCancel: () => {
          return true
        }
      }, props)
      let node = document.createElement('div')
      mounted.appendChild(node)
      let vue = new Vue({ //eslint-disable-line
        el: node,
        render (createElement) {
          let content = props.content
          return createElement(Confirm, {
            props: {
              ...props
            },
            on: {
              'on-confirm': this.confirmHandler,
              'on-close': this.closeHandler
            },
            scopedSlots: {
              default: props => createElement('div', content)
            }
          })
        },
        data: {props: props},
        methods: {
          confirmHandler: () => {
            props.open = props.onConfirm() === false
            !props.open && setTimeout(() => {
              vue.$destroy()
            }, 1000)
          },
          closeHandler: () => {
            props.open = props.onCancel() === false
            !props.open && setTimeout(() => {
              vue.$destroy()
            }, 1000)
          }
        },
        destroyed: () => {
          requestAnimationFrame(() => {
            vue.$el.remove()
          })
        }
      })
      return vue
    }
    w.$prompt = (props, mounted = document.body) => {
      props = Object.assign({
        open: true,
        disabled: true,
        onConfirm: () => {
          return true
        },
        onCancel: () => {
          return true
        },
        onChange: (value) => {
          if (value && value.trim()) {
            return false
          } else {
            return true
          }
        }
      }, props)
      let node = document.createElement('div')
      mounted.appendChild(node)
      let vue = new Vue({ //eslint-disable-line
        el: node,
        render (createElement) {
          let content = props.content
          return createElement(Prompt, {
            props: {
              ...props
            },
            on: {
              'on-confirm': this.confirmHandler,
              'on-close': this.closeHandler,
              'on-change': this.changeHandler
            },
            scopedSlots: {
              default: props => createElement('div', content)
            }
          })
        },
        data: {props: props},
        methods: {
          confirmHandler: () => {
            props.open = props.onConfirm() === false
            !props.open && setTimeout(() => {
              vue.$destroy()
            }, 1000)
          },
          closeHandler: () => {
            props.open = props.onCancel() === false
            !props.open && setTimeout(() => {
              vue.$destroy()
            }, 1000)
          },
          changeHandler: (value) => {
            props.disabled = props.onChange(value)
          }
        },
        destroyed: () => {
          requestAnimationFrame(() => {
            vue.$el.remove()
          })
        }
      })
      return vue
    }
  })(window)
}

export {
  install,
  Actionsheet,
  ActionsheetItem,
  Swiper,
  SwiperItem,
  Marquee,
  MarqueeItem,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  Sidebar,
  SidebarItem,
  Flexbox,
  FlexboxItem,
  ButtonTab,
  ButtonTabItem,
  XButton,
  XInput,
  Password,
  Range,
  XForm,
  FormItem,
  Field,
  XTextarea,
  XSwitch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  XSelect,
  Checker,
  Divider,
  Group,
  Cell,
  Confirm,
  Prompt,
  Alert,
  Popup,
  PopupPicker,
  Toast,
  XImg,
  ListView,
  Ripple,
  Search,
  Layout,
  XNav,
  XBody,
  XLink,
  Preview,
  Spinner,
  Picker,
  Badge,
  Swipeout,
  Rater,
  DatetimePicker,
  DaterangePicker,
  Datetime,
  Daterange,
  Popover,
  Sticky,
  Icon
}
