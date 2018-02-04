const Demos = r => require.ensure([], () => r(require('demos/App')))
const Button = r => require.ensure([], () => r(require('demos/Button')))
const Input = r => require.ensure([], () => r(require('demos/Input')))
const Password = r => require.ensure([], () => r(require('demos/Password')))
const Textarea = r => require.ensure([], () => r(require('demos/Textarea')))
const Select = r => require.ensure([], () => r(require('demos/Select')))
const Switch = r => require.ensure([], () => r(require('demos/Switch')))
const Radio = r => require.ensure([], () => r(require('demos/Radio')))
const Checkbox = r => require.ensure([], () => r(require('demos/Checkbox')))
const Range = r => require.ensure([], () => r(require('demos/Range')))
const Actionsheet = r => require.ensure([], () => r(require('demos/Actionsheet')))
const Alert = r => require.ensure([], () => r(require('demos/Alert')))
const Confirm = r => require.ensure([], () => r(require('demos/Confirm')))
const Tab = r => require.ensure([], () => r(require('demos/Tab')))
const Tabbar = r => require.ensure([], () => r(require('demos/Tabbar')))
const ButtonTab = r => require.ensure([], () => r(require('demos/ButtonTab')))
const Popup = r => require.ensure([], () => r(require('demos/Popup')))
const Toast = r => require.ensure([], () => r(require('demos/Toast')))
const Img = r => require.ensure([], () => r(require('demos/Img')))
const ListView = r => require.ensure([], () => r(require('demos/ListView')))
const Ripple = r => require.ensure([], () => r(require('demos/Ripple')))
const Search = r => require.ensure([], () => r(require('demos/Search')))
const Nav = r => require.ensure([], () => r(require('demos/Nav')))
const Divider = r => require.ensure([], () => r(require('demos/Divider')))
const Swiper = r => require.ensure([], () => r(require('demos/Swiper')))
const Preview = r => require.ensure([], () => r(require('demos/Preview')))
const Flexbox = r => require.ensure([], () => r(require('demos/Flexbox')))
const Group = r => require.ensure([], () => r(require('demos/Group')))
const Cell = r => require.ensure([], () => r(require('demos/Cell')))
const Prompt = r => require.ensure([], () => r(require('demos/Prompt')))
const Form = r => require.ensure([], () => r(require('demos/Form')))
const Swipeout = r => require.ensure([], () => r(require('demos/Swipeout')))
const Picker = r => require.ensure([], () => r(require('demos/Picker')))
const PopupPicker = r => require.ensure([], () => r(require('demos/PopupPicker')))
const DatetimePicker = r => require.ensure([], () => r(require('demos/DatetimePicker')))
const Badge = r => require.ensure([], () => r(require('demos/Badge')))
const Checker = r => require.ensure([], () => r(require('demos/Checker')))
const Sidebar = r => require.ensure([], () => r(require('demos/Sidebar')))
const Rater = r => require.ensure([], () => r(require('demos/Rater')))
const Spinner = r => require.ensure([], () => r(require('demos/Spinner')))
const Datetime = r => require.ensure([], () => r(require('demos/Datetime')))
const Daterange = r => require.ensure([], () => r(require('demos/Daterange')))
const Marquee = r => require.ensure([], () => r(require('demos/Marquee')))
const Popover = r => require.ensure([], () => r(require('demos/Popover')))
const Carousel = r => require.ensure([], () => r(require('demos/Carousel')))
const Qrcode = r => require.ensure([], () => r(require('demos/Qrcode')))
const Message = r => require.ensure([], () => r(require('demos/Message')))
const Sticky = r => require.ensure([], () => r(require('demos/Sticky')))

export default [
  {
    path: '/',
    component: Demos,
    children: [
      {
        path: '/demos/button',
        component: Button
      },
      {
        path: '/demos/input',
        component: Input
      },
      {
        path: '/demos/password',
        component: Password
      },
      {
        path: '/demos/textarea',
        component: Textarea
      },
      {
        path: '/demos/select',
        component: Select
      },
      {
        path: '/demos/switch',
        component: Switch
      },
      {
        path: '/demos/radio',
        component: Radio
      },
      {
        path: '/demos/checkbox',
        component: Checkbox
      },
      {
        path: '/demos/range',
        component: Range
      },
      {
        path: '/demos/form',
        component: Form
      },
      {
        path: '/demos/actionsheet',
        component: Actionsheet
      },
      {
        path: '/demos/alert',
        component: Alert
      },
      {
        path: '/demos/confirm',
        component: Confirm
      },
      {
        path: '/demos/prompt',
        component: Prompt
      },
      {
        path: '/demos/tab',
        component: Tab
      },
      {
        path: '/demos/tabbar',
        component: Tabbar
      },
      {
        path: '/demos/buttontab',
        component: ButtonTab
      },
      {
        path: '/demos/popup',
        component: Popup
      },
      {
        path: '/demos/toast',
        component: Toast
      },
      {
        path: '/demos/img',
        component: Img
      },
      {
        path: '/demos/listview',
        component: ListView
      },
      {
        path: '/demos/ripple',
        component: Ripple
      },
      {
        path: '/demos/search',
        component: Search
      },
      {
        path: '/demos/nav',
        component: Nav
      },
      {
        path: '/demos/divider',
        component: Divider
      },
      {
        path: '/demos/swiper',
        component: Swiper
      },
      {
        path: '/demos/swipeout',
        component: Swipeout
      },
      {
        path: '/demos/preview',
        component: Preview
      },
      {
        path: '/demos/flexbox',
        component: Flexbox
      },
      {
        path: '/demos/group',
        component: Group
      },
      {
        path: '/demos/cell',
        component: Cell
      },
      {
        path: '/demos/picker',
        component: Picker
      },
      {
        path: '/demos/popuppicker',
        component: PopupPicker
      },
      {
        path: '/demos/datetimepicker',
        component: DatetimePicker
      },
      {
        path: '/demos/badge',
        component: Badge
      },
      {
        path: '/demos/checker',
        component: Checker
      },
      {
        path: '/demos/sidebar',
        component: Sidebar
      },
      {
        path: '/demos/rater',
        component: Rater
      },
      {
        path: '/demos/spinner',
        component: Spinner
      },
      {
        path: '/demos/datetime',
        component: Datetime
      },
      {
        path: '/demos/daterange',
        component: Daterange
      },
      {
        path: '/demos/marquee',
        component: Marquee
      },
      {
        path: '/demos/popover',
        component: Popover
      },
      {
        path: '/demos/carousel',
        component: Carousel
      },
      {
        path: '/demos/qrcode',
        component: Qrcode
      },
      {
        path: '/demos/message',
        component: Message
      },
      {
        path: '/demos/sticky',
        component: Sticky
      }
    ]
  }
]
