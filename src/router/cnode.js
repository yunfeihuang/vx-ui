const Home = r => require.ensure([], () => r(require('cnode/App')))
const Topic = r => require.ensure([], () => r(require('cnode/Topic')))
const User = r => require.ensure([], () => r(require('cnode/User')))

export default [
  {
    path: '/cnode',
    component: Home,
    children: [
      {
        path: '/cnode/topic/:id',
        component: Topic
      },
      {
        path: '/cnode/user/:id',
        component: User
      }
    ]
  }
]

