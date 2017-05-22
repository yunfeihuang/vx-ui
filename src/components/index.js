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
import {Flexbox, FlexItem} from './flexbox'
import {ButtonTab, ButtonTabItem} from './button-tab'
import Divider from './divider'
import Group from './group'
import Cell from './cell'
import Confirm from './confirm'
import Alert from './alert'
import Popup from './popup'
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

window.toast = (props, mounted = document.body) => {
  props = Object.assign({destroy: true, open: true, type: ''}, props)
  let node = document.createElement('div')
  mounted.appendChild(node)
  return new Vue({ //eslint-disable-line
    el: node,
    template: `<toast :open="props.open" :type="props.type" :destroy="props.destroy" :align="props.align" @on-close="props.onClose">{{props.content}}</toast>`,
    components: {Toast},
    data: {props: props}
  })
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
  FlexItem,
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
  Toast,
  XImg,
  Flow,
  Ripple,
  Search,
  Layout,
  XHeader,
  XBody,
  XLink,
  Preview
}
