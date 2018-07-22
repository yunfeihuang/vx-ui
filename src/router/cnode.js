import store from '@/store'

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

