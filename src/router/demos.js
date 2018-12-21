import page from '@/utils/mixins/page'
const requireComponent = require.context('../demos/', false, /\.vue$/) // 找到demos文件夹下以.vue命名的文件
let route = []
let children = []
const $import = importComponent => {
  return importComponent.then(res => {
    !res.default.mixins && (res.default.mixins = [])
    res.default.mixins.push(page)
    return res
  })
}
requireComponent.keys().forEach(fileName => {
  let path = fileName.replace('./', '/demos/')
  let App = 'App'
  if (fileName.indexOf('App.vue') > -1) {
    route.push({
      path: '/',
      component: () => import(`@/demos/${App}`),
      children: children
    })
  } else {
    children.push({
      path: path.toLocaleLowerCase().replace('.vue', ''),
      component: () => $import(import(`@/demos${fileName.replace('.', '')}`))
    })
  }
})

export default route
