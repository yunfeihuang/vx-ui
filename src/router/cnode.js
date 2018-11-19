import store from '@/store'
import page from '@/utils/mixins/page'

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
        component: () => {
          return import(`cnode/Topic`).then(res => {
            !res.default.mixins && (res.default.mixins = [])
            res.default.mixins.push(page)
            return res
          })
        }
      },
      {
        path: '/cnode/user/:id',
        component: () => {
          return import(`cnode/User`).then(res => {
            !res.default.mixins && (res.default.mixins = [])
            res.default.mixins.push(page)
            return res
          })
        }
      }
    ]
  }
]

