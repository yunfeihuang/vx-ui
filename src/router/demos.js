const requireComponent = require.context('../demos/', false, /\.vue$/) // 找到demos文件夹下以.vue命名的文件
let route = []
let children = []
requireComponent.keys().forEach(fileName => {
  let path = fileName.replace('./', '/demos/')
  let App = 'App'
  if (fileName.indexOf('App.vue') > -1) {
    route.push({
      path: '/demos',
      component: () => import(`@/demos/${App}`),
      children: children
    })
  } else {
    children.push({
      path: path.toLocaleLowerCase().replace('.vue', ''),
      component: () => import(`@/demos${fileName.replace('.', '')}`)
    })
  }
})
export default route
