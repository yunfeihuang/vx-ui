import navConfig from './nav.config'

let route = []
const registerRoute = (navConfig) => {
  navConfig.forEach((item) => {
    if (item.path) {
      route.push({
        path: item.path,
        component: () => import(`./mds${item.path === '/' ? '/index' : item.path}.md`)
      })
    }
    if (item.children && item.children.forEach) {
      registerRoute(item.children)
    }
  })
}
registerRoute(navConfig)

export default route
