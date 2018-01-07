import api from '../api'

export default {
  global: ({commit, state}) => {
    api.global().then((json) => {
      commit('GLOBAL', {data: json})
    })
  }
}
