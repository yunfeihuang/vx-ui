import store from '@/store'

let importStoreModules = (modules, cb) => {
  let _modules = modules.map(item => {
    return {path: `@/store/modules/${item}`, name: item}
  })
  let i = 0
  let $import = () => {
    let item = _modules[i]
    if (item) {
      import(item.path).then(res => {
        store.registerModule(item.name, res.default)
        i++
        $import()
      }).catch((e) => {
        console.log(e)
      })
    } else {
      cb && cb()
    }
  }
  $import()
}
console.log(importStoreModules)

export default [
  {
    path: '/cnode',
    component: () => import('cnode/App'),
    beforeEnter: (to, from, next) => {
      import('@/store/modules/cnode').then(res => {
        store.registerModule('cnode', res.default)
        next()
      })
    },
    children: [
      {
        path: '/cnode/topic/:id',
        component: () => import('cnode/Topic')
      },
      {
        path: '/cnode/user/:id',
        component: () => import('cnode/User')
      }
    ]
  }
]

