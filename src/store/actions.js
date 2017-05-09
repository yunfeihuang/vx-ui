import types from './mutation-types'
import api from '../api'

export default {
  global: ({commit, state}) => {
    api.global().then((json) => {
      commit(types.GLOBAL, {data: json})
    })
  }
}
