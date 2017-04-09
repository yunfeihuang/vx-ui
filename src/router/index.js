import Vue from 'vue'
import Router from 'vue-router'
// import App from 'components/App'
import {
  App,
  Button,
  Input,
  Textarea,
  Select,
  Switch,
  Radio,
  Checkbox,
  Range,
  Actionsheet,
  Alert,
  Confirm,
  Tab,
  TabButton,
  Popup,
  Toast,
  Img,
  Flow,
  Ripple,
  Search,
  Header
} from 'demos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/textarea',
      name: 'Textarea',
      component: Textarea
    },
    {
      path: '/select',
      name: 'select',
      component: Select
    },
    {
      path: '/switch',
      name: 'switch',
      component: Switch
    },
    {
      path: '/radio',
      name: 'radio',
      component: Radio
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: Checkbox
    },
    {
      path: '/range',
      name: 'range',
      component: Range
    },
    {
      path: '/actionsheet',
      name: 'actionsheet',
      component: Actionsheet
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alert
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },
    {
      path: '/tabbutton',
      name: 'tabbutton',
      component: TabButton
    },
    {
      path: '/popup',
      name: 'popup',
      component: Popup
    },
    {
      path: '/toast',
      name: 'toast',
      component: Toast
    },
    {
      path: '/img',
      name: 'img',
      component: Img
    },
    {
      path: '/flow',
      name: 'flow',
      component: Flow
    },
    {
      path: '/ripple',
      name: 'ripple',
      component: Ripple
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    }
  ]
})
