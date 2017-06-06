/*
import {
  Home,
  Topic,
  User
} from 'cnode'
*/

const Home = r => require.ensure([], () => r(require('cnode/App')), 'App')
const Topic = r => require.ensure([], () => r(require('cnode/Topic')), 'Topic')
const User = r => require.ensure([], () => r(require('cnode/User')), 'User')

export default [
  {
    path: '/cnode',
    name: 'Home',
    component: Home
  },
  {
    path: '/cnode/topic/:id',
    name: 'Topic',
    component: Topic
  },
  {
    path: '/cnode/user/:id',
    name: 'User',
    component: User
  }
]

