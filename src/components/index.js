
import {createApp, h, onMounted, reactive} from 'vue'
import {Page, PageBody} from './page'
import Ripple from './ripple'
import Button from './button'
import Input from './input'
import InputNumber from './input-number'
import Password from './password'
import Switch from './switch'
import {Checkbox, CheckboxGroup} from './checkbox'
import {Radio, RadioGroup} from './radio'
import {Checker, CheckerGroup} from './checker'
import Textarea from './textarea'
import {Select, Option} from './select'
import Search from './search'
import Range from './range'
import Datetime from './datetime'
import Daterange from './daterange'
import Divider from './divider'
import Heading from './heading'
import Group from './group'
import Cell from './cell'
import Nav from './nav'
import Spinner from './spinner'
import Badge from './badge'
import Rater from './rater'
import Message from './message'
import Arrow from './arrow'
import SubmitBar from './submit-bar'
import ListItem from './list-item'
import ListView from './list-view'
import Toast from './toast'
import Confirm from './confirm'
import Popup from './popup'
import Prompt from './prompt'
import Alert from './alert'
import Picker from './picker'
import Popover from './popover'
import Preview from './preview'
import {Actionsheet, ActionsheetItem} from './actionsheet'
import IndexList from './index-list'
import Img from './img'
import AvatarGroup from './avatar-group'
import {Swiper, SwiperItem} from './swiper'
import Swipeout from './swipeout'
import DaterangePicker from './daterange-picker'
import Calendar from './calendar'
import CalendarRange from './calendar-range'
import {Tab, TabItem} from './tab'
import {Tabbar, TabbarItem} from './tabbar'
import {Sidebar, SidebarItem} from './sidebar'
import {ButtonTab, ButtonTabItem} from './button-tab'
import {Flexbox, FlexboxItem} from './flexbox'
import {Grid, GridItem} from './grid'
import Cascader from './cascader'
import {Accordion, AccordionItem} from './accordion'
import {DropdownMenu, DropdownMenuItem} from './dropdown-menu'

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || setTimeout
}

/*
对Date的扩展，将 Date 转化为指定格式的String
月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
(new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
(new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
*/
Date.prototype.format = function (fmt = 'yyyy-MM-dd') { // author: meizz
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'H+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}
let components = [
  Page,
  PageBody,
  Ripple,
  Button,
  Input,
  InputNumber,
  Textarea,
  Password,
  Switch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Checker,
  CheckerGroup,
  Select,
  Option,
  Datetime,
  Daterange,
  Range,
  Divider,
  Heading,
  Group,
  Cell,
  Nav,
  Spinner,
  Badge,
  Rater,
  Message,
  Arrow,
  SubmitBar,
  ListItem,
  ListView,
  Calendar,
  CalendarRange,
  Popup,
  DaterangePicker,
  Actionsheet,
  ActionsheetItem,
  Toast,
  Confirm,
  Prompt,
  Alert,
  Picker,
  Popover,
  Preview,
  Swiper,
  SwiperItem,
  IndexList,
  Search,
  Img,
  AvatarGroup,
  Swipeout,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  Sidebar,
  SidebarItem,
  ButtonTab,
  ButtonTabItem,
  Flexbox,
  FlexboxItem,
  Grid,
  GridItem,
  Cascader,
  Accordion,
  AccordionItem,
  DropdownMenu,
  DropdownMenuItem
]

const install = (app) => {
  components.map(component => {
    if (component && component.name) {
      app.component(component.name, component)
    }
  })
  app.config.globalProperties.$toast = (_props, mounted = document.body) => {
    let props = Object.assign({
      open: true,
      onClose: () => {
        return true
      }
    }, _props)
    let { onClose, message, ...others} = props
    let node = document.createElement('div')
    mounted.appendChild(node)
    let vue = createApp({ //eslint-disable-line
      setup () {
        let data = reactive(others)
        const handleClose = () => {
          data.open = onClose() === false
        }
        const handleAfterClose = () => {
          vue.unmount && vue.unmount()
        }
        return () => {
          return h(Toast, {
            ...data,
            'onClose': handleClose,
            'onAfterClose': handleAfterClose
          }, message)
        }
      },
      beforeUnmount () {
        node.parentNode.removeChild(node)
      }
    })
    vue.mount(node)
    return vue
  }

  app.config.globalProperties.$alert = (_props, mounted = document.body) => {
    return new Promise((resolve, reject) => {
      let props = Object.assign({
        open: false,
        onConfirm: () => {
          return true
        },
        onCancel: () => {
          return true
        }
      }, _props)
      let { onCancel, onConfirm, message, ...others} = props
      let node = document.createElement('div')
      mounted.appendChild(node)
      let vue = createApp({ //eslint-disable-line
        setup () {
          const data = reactive(others)
          onMounted(() => {
            data.open = true
          })
          const handleConfirm = () => {
            resolve()
            data.open = onConfirm() === false
          }
          const handleClose = () => {
            data.open = onCancel() === false
            !data.open && reject()
          }
          const handleAfterClose = () => {
            vue.unmount && vue.unmount()
          }
          
          return () => {
            return h(Alert, {
              ...data,
              onConfirm: handleConfirm,
              onClose: handleClose,
              onAfterClose: handleAfterClose
            }, message)
          }
        },
        beforeUnmount () {
          node.parentNode.removeChild(node)
        }
      })
      vue.mount(node)
    })
  }
  app.config.globalProperties.$confirm = (_props, mounted = document.body) => {
    return new Promise((resolve, reject) => {
      let props = Object.assign({
        open: false,
        onConfirm: () => {
          return true
        },
        onCancel: () => {
          return true
        }
      }, _props)
      let { onCancel, onConfirm, onButtonClick, message, ...others} = props
      let node = document.createElement('div')
      mounted.appendChild(node)
      let vue = createApp({ //eslint-disable-line
        setup () {
          const data = reactive(others)
          onMounted(() => {
            data.open = true
          })
          const handleConfirm = () => {
            resolve()
            data.open = onConfirm() === false
          }
          const handleClose = () => {
            data.open = onCancel() === false
            !data.open && reject()
          }
          const handleAfterClose = () => {
            vue.unmount && vue.unmount()
          }
          const handleButtonClick = (event) => {
            onButtonClick && onButtonClick(event)
          }
          return () => {
            return h(Confirm, {
              ...data,
              onConfirm: handleConfirm,
              onClose: handleClose,
              onAfterClose: handleAfterClose,
              onButtonClick: handleButtonClick
            }, message)
          }
        },
        beforeUnmount () {
          node.parentNode.removeChild(node)
        }
      }).mount(node)
    })
  }
  app.config.globalProperties.$prompt = (_props, mounted = document.body) => {
    return new Promise((resolve, reject) => {
      let props = Object.assign({
        open: false,
        disabled: true,
        onConfirm: () => {
          return true
        },
        onCancel: () => {
          return true
        },
        onChange: (value) => {
          if (value && value.trim && value.trim()) {
            return false
          } else {
            return true
          }
        }
      }, _props)
      let { onCancel, onChange, onConfirm, ...others} = props
      let node = document.createElement('div')
      mounted.appendChild(node)
      let vue = createApp({ //eslint-disable-line
        setup () {
          const data = reactive(others)
          onMounted(() => {
            data.open = true
          })
          const handleConfirm = (value) => {
            resolve(value)
            data.open = onConfirm(value) === false
          }
          const handleClose = () => {
            data.open = onCancel() === false
            !data.open && reject()
          }
          const handleChange = (value) => {
            data.disabled = onChange(value)
          }
          const handleAfterClose = () => {
            vue.unmount && vue.unmount()
          }
          return () => {
            return h(Prompt, {
              ...data,
              onConfirm: handleConfirm,
              onClose: handleClose,
              onAfterClose: handleAfterClose,
              'onUpdate:modelValue': handleChange
            })
          }
        },
        beforeUnmount () {
          node.parentNode.removeChild(node)
        }
      })
      vue.mount(node)
    })
  }
  app.config.globalProperties.$actionsheet = (_props, mounted = document.body) => {
    return new Promise((resolve, reject) => {
      let props = Object.assign({
        open: false,
        onClose: () => {
          return true
        },
        onAction: () => {
          return true
        }
      }, _props)
      let { onClose, onAction, options, ...others} = props
      let node = document.createElement('div')
      mounted.appendChild(node)
      let vue = createApp({ //eslint-disable-line
        setup () {
          const data = reactive(others)
          onMounted(() => {
            data.open = true
          })
          const handleClose = () => {
            data.open = onClose() === false
            !data.open && reject()
          }
          const handleAction = (value) => {
            resolve(value)
            data.open = onAction(value) === false
          }
          const handleAfterClose = () => {
            vue.unmount && vue.unmount()
          }
          return () => {
            return h(Actionsheet, {
              ...data,
              onClose: handleClose,
              onAction: handleAction,
              onAfterClose: handleAfterClose
            }, options.map(item => {
              return h(ActionsheetItem, {
                value: item.value
              }, item.label)
            }))
          }
        },
        beforeUnmount () {
          node.parentNode.removeChild(node)
        }
      })
      vue.mount(node)
    })
  }
  app.config.globalProperties.$preview = (props, close) => {
    let node = document.createElement('div')
    document.body.appendChild(node)
    let vue = createApp({
      setup () {
        const handleClose = () => {
          vue.unmount()
          close && close()
        }
        return () => {
          return h(Preview, {
            ...props,
            onClose: handleClose
          })
        }
      },
      beforeUnmount () {
        node.parentNode.removeChild(node)
      }
    })
    vue.mount(node)
  }
  app.directive('vx-preview', {
    mounted (el, binding) {
      binding.instance && binding.$preview && el.addEventListener('click', () => {
        binding.$preview({index: 0, list: [binding.value]})
      })
    }
  })
}

export {
  Page,
  PageBody,
  Ripple,
  Button,
  Input,
  InputNumber,
  Textarea,
  Password,
  Switch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Checker,
  CheckerGroup,
  Select,
  Option,
  Datetime,
  Daterange,
  Range,
  Divider,
  Heading,
  Group,
  Cell,
  Nav,
  Spinner,
  Badge,
  Rater,
  Message,
  Arrow,
  SubmitBar,
  ListItem,
  ListView,
  Calendar,
  CalendarRange,
  Popup,
  DaterangePicker,
  Actionsheet,
  ActionsheetItem,
  Toast,
  Confirm,
  Prompt,
  Alert,
  Picker,
  Popover,
  Preview,
  Swiper,
  SwiperItem,
  IndexList,
  Search,
  Img,
  AvatarGroup,
  Swipeout,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  Sidebar,
  SidebarItem,
  ButtonTab,
  ButtonTabItem,
  Flexbox,
  FlexboxItem,
  Grid,
  GridItem,
  Cascader,
  Accordion,
  AccordionItem,
  DropdownMenu,
  DropdownMenuItem
}
export default {
  install
}
