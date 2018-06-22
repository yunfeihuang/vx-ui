export default [
  {
    path: '/cnode',
    component: () => import('cnode/App'),
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

