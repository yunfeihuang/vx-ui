import navConfig from './nav.config'

let route = []
let components = {
  '/': r => require.ensure([], () => r(require('./mds/index.md'))),
  '/button': r => require.ensure([], () => r(require('./mds/button.md'))),
  '/flexbox': r => require.ensure([], () => r(require('./mds/flexbox.md'))),
  '/nav': r => require.ensure([], () => r(require('./mds/nav.md'))),
  '/group': r => require.ensure([], () => r(require('./mds/group.md'))),
  '/cell': r => require.ensure([], () => r(require('./mds/cell.md'))),
  '/divider': r => require.ensure([], () => r(require('./mds/divider.md'))),
  '/message': r => require.ensure([], () => r(require('./mds/message.md'))),
  '/input': r => require.ensure([], () => r(require('./mds/input.md'))),
  '/textarea': r => require.ensure([], () => r(require('./mds/textarea.md'))),
  '/password': r => require.ensure([], () => r(require('./mds/password.md'))),
  '/select': r => require.ensure([], () => r(require('./mds/select.md'))),
  '/switch': r => require.ensure([], () => r(require('./mds/switch.md'))),
  '/radio': r => require.ensure([], () => r(require('./mds/radio.md'))),
  '/checkbox': r => require.ensure([], () => r(require('./mds/checkbox.md'))),
  '/checker': r => require.ensure([], () => r(require('./mds/checker.md'))),
  '/range': r => require.ensure([], () => r(require('./mds/range.md'))),
  '/datetime': r => require.ensure([], () => r(require('./mds/datetime.md'))),
  '/daterange': r => require.ensure([], () => r(require('./mds/daterange.md'))),
  '/rater': r => require.ensure([], () => r(require('./mds/rater.md'))),
  '/search': r => require.ensure([], () => r(require('./mds/search.md'))),
  '/actionsheet': r => require.ensure([], () => r(require('./mds/actionsheet.md'))),
  '/alert': r => require.ensure([], () => r(require('./mds/alert.md'))),
  '/confirm': r => require.ensure([], () => r(require('./mds/confirm.md'))),
  '/prompt': r => require.ensure([], () => r(require('./mds/prompt.md'))),
  '/popover': r => require.ensure([], () => r(require('./mds/popover.md'))),
  '/toast': r => require.ensure([], () => r(require('./mds/toast.md'))),
  '/popup': r => require.ensure([], () => r(require('./mds/popup.md'))),
  '/popuppicker': r => require.ensure([], () => r(require('./mds/popuppicker.md'))),
  '/tab': r => require.ensure([], () => r(require('./mds/tab.md'))),
  '/tabbar': r => require.ensure([], () => r(require('./mds/tabbar.md'))),
  '/sidebar': r => require.ensure([], () => r(require('./mds/sidebar.md'))),
  '/buttontab': r => require.ensure([], () => r(require('./mds/buttontab.md'))),
  '/img': r => require.ensure([], () => r(require('./mds/img.md'))),
  '/swiper': r => require.ensure([], () => r(require('./mds/swiper.md'))),
  '/preview': r => require.ensure([], () => r(require('./mds/preview.md'))),
  '/qrcode': r => require.ensure([], () => r(require('./mds/qrcode.md'))),
  '/badge': r => require.ensure([], () => r(require('./mds/badge.md'))),
  '/picker': r => require.ensure([], () => r(require('./mds/picker.md'))),
  '/ripple': r => require.ensure([], () => r(require('./mds/ripple.md'))),
  '/listview': r => require.ensure([], () => r(require('./mds/listview.md'))),
  '/sticky': r => require.ensure([], () => r(require('./mds/sticky.md'))),
  '/swipeout': r => require.ensure([], () => r(require('./mds/swipeout.md'))),
  '/spinner': r => require.ensure([], () => r(require('./mds/spinner.md'))),
  '/marquee': r => require.ensure([], () => r(require('./mds/marquee.md')))
}
const registerRoute = (navConfig) => {
  navConfig.forEach((item) => {
    if (item.path) {
      route.push({
        path: item.path,
        component: components[item.path]
      })
    }
    if (item.children && item.children.forEach) {
      registerRoute(item.children)
    }
  })
}
registerRoute(navConfig)

export default route
