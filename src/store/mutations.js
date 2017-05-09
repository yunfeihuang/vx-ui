import types from './mutation-types'

export default {
  [types.GLOBAL] (state, {global}) {
    state.global = global
  }
}
