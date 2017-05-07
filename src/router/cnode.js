import {
  Home,
  Topic,
  User
} from 'cnode'

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

