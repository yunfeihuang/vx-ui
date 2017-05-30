import '../../iconfont/iconfont.css'
import './index.scss'
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
import {XForm, FormItem} from './form'
import {Actionsheet, ActionsheetItem} from './actionsheet'
import {Swiper, SwiperItem} from './swiper'
import {Tab, TabItem} from './tab'
import {Tabbar, TabbarItem} from './tabbar'
import {Flexbox, FlexboxItem} from './flexbox'
import {ButtonTab, ButtonTabItem} from './button-tab'
import Divider from './divider'
import Group from './group'
import Cell from './cell'
import Confirm from './confirm'
import Alert from './alert'
import Popup from './popup'
import PopupPicker from './popup-picker'
import Toast from './toast'
import XImg from './img'
import Flow from './flow'
import Ripple from './ripple'
import Search from './search'
import Layout from './layout'
import XHeader from './header'
import XBody from './body'
import XLink from './link'
import Preview from './preview'
import Spinner from './spinner'
import Picker from './picker'
import Badge from './badge'
import DatetimePicker from './datetime-picker'

window.toast = (props, mounted = document.body) => {
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
    template: `<toast :open="props.open" :duration="props.duration" :type="props.type" :align="props.align" @on-close="closeHandler">{{props.content}}</toast>`,
    components: {Toast},
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

window.alert = (props, mounted = document.body) => {
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
    template: `<alert :open="props.open" :confirm-text="props.confirmText" @on-confirm="confirmHandler">{{props.content}}</alert>`,
    components: {Alert},
    data: {props: props},
    methods: {
      confirmHandler: () => {
        props.open = props.onConfirm() === false
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

window.confirm = (props, mounted = document.body) => {
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
    template: `<confirm :open="props.open" :confirm-text="props.confirmText" :cancel-text="props.cancelText" @on-confirm="confirmHandler" @on-cancel="cancelHandler">{{props.content}}</confirm>`,
    components: {Confirm},
    data: {props: props},
    methods: {
      confirmHandler: () => {
        props.open = props.onConfirm() === false
        !props.open && setTimeout(() => {
          vue.$destroy()
        }, 1000)
      },
      cancelHandler: () => {
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

export {
  Actionsheet,
  ActionsheetItem,
  Swiper,
  SwiperItem,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
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
  XTextarea,
  XSwitch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  XSelect,
  Divider,
  Group,
  Cell,
  Confirm,
  Alert,
  Popup,
  PopupPicker,
  Toast,
  XImg,
  Flow,
  Ripple,
  Search,
  Layout,
  XHeader,
  XBody,
  XLink,
  Preview,
  Spinner,
  Picker,
  Badge,
  DatetimePicker
}
