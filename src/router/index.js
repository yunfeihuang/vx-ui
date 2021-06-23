import { createRouter, createWebHashHistory} from 'vue-router'
import demos from './demos'

const routes = [
  ...demos
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
