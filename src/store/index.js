import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import cnode from './modules/cnode'

Vue.use(Vuex)

let state = {
  global: {}
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    cnode: cnode
  },
  strict: debug
})
