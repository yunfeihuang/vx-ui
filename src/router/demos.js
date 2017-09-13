/*
import {
  App,
  Button,
  Input,
  Textarea,
  Select,
  Checker,
  Switch,
  Radio,
  Checkbox,
  Range,
  Form,
  Actionsheet,
  Alert,
  Confirm,
  Prompt,
  Tab,
  Tabbar,
  Sidebar,
  TabButton,
  Popup,
  Toast,
  Img,
  Flow,
  Ripple,
  Search,
  Header,
  Divider,
  Swiper,
  Swipeout,
  Preview,
  Flexbox,
  Picker,
  PopupPicker,
  DatetimePicker,
  Badge,
  Rater,
  Datetime,
  Spinner,
  Marquee
} from 'demos'
*/

const Demos = r => require.ensure([], () => r(require('demos/App')), 'Demos')
const Button = r => require.ensure([], () => r(require('demos/Button')), 'Button')
const Input = r => require.ensure([], () => r(require('demos/Input')), 'Input')
const Textarea = r => require.ensure([], () => r(require('demos/Textarea')), 'Textarea')
const Select = r => require.ensure([], () => r(require('demos/Select')), 'Select')
const Switch = r => require.ensure([], () => r(require('demos/Switch')), 'Switch')
const Radio = r => require.ensure([], () => r(require('demos/Radio')), 'Radio')
const Checkbox = r => require.ensure([], () => r(require('demos/Checkbox')), 'Checkbox')
const Range = r => require.ensure([], () => r(require('demos/Range')), 'Range')
const Actionsheet = r => require.ensure([], () => r(require('demos/Actionsheet')), 'Actionsheet')
const Alert = r => require.ensure([], () => r(require('demos/Alert')), 'Alert')
const Confirm = r => require.ensure([], () => r(require('demos/Confirm')), 'Confirm')
const Tab = r => require.ensure([], () => r(require('demos/Tab')), 'Tab')
const Tabbar = r => require.ensure([], () => r(require('demos/Tabbar')), 'Tabbar')
const TabButton = r => require.ensure([], () => r(require('demos/TabButton')), 'TabButton')
const Popup = r => require.ensure([], () => r(require('demos/Popup')), 'Popup')
const Toast = r => require.ensure([], () => r(require('demos/Toast')), 'Toast')
const Img = r => require.ensure([], () => r(require('demos/Img')), 'Img')
const Flow = r => require.ensure([], () => r(require('demos/Flow')), 'Flow')
const Ripple = r => require.ensure([], () => r(require('demos/Ripple')), 'Ripple')
const Search = r => require.ensure([], () => r(require('demos/Search')), 'Search')
const Header = r => require.ensure([], () => r(require('demos/Header')), 'Header')
const Divider = r => require.ensure([], () => r(require('demos/Divider')), 'Divider')
const Swiper = r => require.ensure([], () => r(require('demos/Swiper')), 'Swiper')
const Preview = r => require.ensure([], () => r(require('demos/Preview')), 'Preview')
const Flexbox = r => require.ensure([], () => r(require('demos/Flexbox')), 'Flexbox')
const Prompt = r => require.ensure([], () => r(require('demos/Prompt')), 'Prompt')
const Form = r => require.ensure([], () => r(require('demos/Form')), 'Form')
const Swipeout = r => require.ensure([], () => r(require('demos/Swipeout')), 'Swipeout')
const Picker = r => require.ensure([], () => r(require('demos/Picker')), 'Picker')
const PopupPicker = r => require.ensure([], () => r(require('demos/PopupPicker')), 'PopupPicker')
const DatetimePicker = r => require.ensure([], () => r(require('demos/DatetimePicker')), 'DatetimePicker')
const Badge = r => require.ensure([], () => r(require('demos/Badge')), 'Badge')
const Checker = r => require.ensure([], () => r(require('demos/Checker')), 'Checker')
const Sidebar = r => require.ensure([], () => r(require('demos/Sidebar')), 'Sidebar')
const Rater = r => require.ensure([], () => r(require('demos/Rater')), 'Rater')
const Spinner = r => require.ensure([], () => r(require('demos/Spinner')), 'Spinner')
const Datetime = r => require.ensure([], () => r(require('demos/Datetime')), 'Datetime')
const Daterange = r => require.ensure([], () => r(require('demos/Daterange')), 'Daterange')
const Marquee = r => require.ensure([], () => r(require('demos/Marquee')), 'Marquee')
const Popover = r => require.ensure([], () => r(require('demos/Popover')), 'Popover')

export default [
  {
    path: '/',
    name: 'Demos',
    component: Demos,
    children: [
      {
        path: '/demos/button',
        name: 'button',
        component: Button
      },
      {
        path: '/demos/input',
        name: 'Input',
        component: Input
      },
      {
        path: '/demos/textarea',
        name: 'Textarea',
        component: Textarea
      },
      {
        path: '/demos/select',
        name: 'select',
        component: Select
      },
      {
        path: '/demos/switch',
        name: 'switch',
        component: Switch
      },
      {
        path: '/demos/radio',
        name: 'radio',
        component: Radio
      },
      {
        path: '/demos/checkbox',
        name: 'checkbox',
        component: Checkbox
      },
      {
        path: '/demos/range',
        name: 'range',
        component: Range
      },
      {
        path: '/demos/form',
        name: 'form',
        component: Form
      },
      {
        path: '/demos/actionsheet',
        name: 'actionsheet',
        component: Actionsheet
      },
      {
        path: '/demos/alert',
        name: 'alert',
        component: Alert
      },
      {
        path: '/demos/confirm',
        name: 'confirm',
        component: Confirm
      },
      {
        path: '/demos/prompt',
        name: 'prompt',
        component: Prompt
      },
      {
        path: '/demos/tab',
        name: 'tab',
        component: Tab
      },
      {
        path: '/demos/tabbar',
        name: 'tabbar',
        component: Tabbar
      },
      {
        path: '/demos/tabbutton',
        name: 'tabbutton',
        component: TabButton
      },
      {
        path: '/demos/popup',
        name: 'popup',
        component: Popup
      },
      {
        path: '/demos/toast',
        name: 'toast',
        component: Toast
      },
      {
        path: '/demos/img',
        name: 'img',
        component: Img
      },
      {
        path: '/demos/flow',
        name: 'flow',
        component: Flow
      },
      {
        path: '/demos/ripple',
        name: 'ripple',
        component: Ripple
      },
      {
        path: '/demos/search',
        name: 'search',
        component: Search
      },
      {
        path: '/demos/header',
        name: 'header',
        component: Header
      },
      {
        path: '/demos/divider',
        name: 'divider',
        component: Divider
      },
      {
        path: '/demos/swiper',
        name: 'swiper',
        component: Swiper
      },
      {
        path: '/demos/swipeout',
        name: 'swipeout',
        component: Swipeout
      },
      {
        path: '/demos/preview',
        name: 'preview',
        component: Preview
      },
      {
        path: '/demos/flexbox',
        name: 'flexbox',
        component: Flexbox
      },
      {
        path: '/demos/picker',
        name: 'picker',
        component: Picker
      },
      {
        path: '/demos/popuppicker',
        name: 'popuppicker',
        component: PopupPicker
      },
      {
        path: '/demos/datetimepicker',
        name: 'datetimepicker',
        component: DatetimePicker
      },
      {
        path: '/demos/badge',
        name: 'badge',
        component: Badge
      },
      {
        path: '/demos/checker',
        name: 'checker',
        component: Checker
      },
      {
        path: '/demos/sidebar',
        name: 'sidebar',
        component: Sidebar
      },
      {
        path: '/demos/rater',
        name: 'rater',
        component: Rater
      },
      {
        path: '/demos/spinner',
        name: 'spinner',
        component: Spinner
      },
      {
        path: '/demos/datetime',
        name: 'datetime',
        component: Datetime
      },
      {
        path: '/demos/daterange',
        name: 'daterange',
        component: Daterange
      },
      {
        path: '/demos/marquee',
        name: 'marquee',
        component: Marquee
      },
      {
        path: '/demos/popover',
        name: 'popover',
        component: Popover
      }
    ]
  }
]
