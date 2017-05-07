import types from '../mutation-types'
import api from '../../api'

const state = {
  home: {
    all: {
      loading: false,
      query: {},
      data: []
    },
    good: {
      loading: false,
      query: {},
      data: []
    },
    share: {
      loading: false,
      query: {},
      data: []
    },
    ask: {
      loading: false,
      query: {},
      data: []
    },
    job: {
      loading: false,
      query: {},
      data: []
    },
    active: 0
  },
  topic: {},
  user: {}
}
// getters
const getters = {
  home: state => state.home,
  topic: state => state.topic,
  user: state => state.user
}

// actions
const actions = {
  home ({commit, state}, query) {
    commit(types.HOME_LOADING, {
      query: query
    })
    api.cnode.list(query).then((json) => {
      commit(types.HOME, {
        query: query,
        data: json.data
      })
    })
  },
  topic ({commit, state}, query) {
    api.cnode.topic(query).then((json) => {
      commit(types.TOPIC, {
        query: query,
        data: json.data
      })
    })
  },
  destroyed ({commit, state}, query) {
    commit(types.DESTROYED, {
      query: query
    })
  },
  user ({commit, state}, query) {
    api.cnode.user(query).then((json) => {
      commit(types.USER, {
        query: query,
        data: json.data
      })
    })
  }
}
// mutations
const mutations = {
  [types.HOME] (state, {data, query}) {
    data.forEach((item) => {
      item.href = '/cnode/topic/' + item.id
      item.user_href = '/cnode/user/' + item.author.loginname
    })
    if (state.home[query.tab].query.page && state.home[query.tab].query.page > query.page) {
      state.home[query.tab].query = query
      state.home[query.tab].data = state.home[query.tab].data.concat(data)
    } else {
      state.home[query.tab].data = data.concat(state.home[query.tab].data)
    }
    state.home[query.tab].loading = false
  },
  [types.HOME_LOADING] (state, {query}) {
    state.home[query.tab].loading = true
    if (query.active !== undefined) {
      state.home.active = query.active
    }
    query.change && (state.home[query.tab].data = [])
  },
  [types.TOPIC] (state, {data, query}) {
    data.content = data.content.replace(/<a/gi, '<a target="_blank" ')// .replace(/<img/gi, '<x-img')
    if (data.replies && data.replies.forEach) {
      data.replies.forEach((item) => {
        item.user_href = '/cnode/user/' + item.author.loginname
        item.href = '/cnode/topic/' + item.id
      })
    }
    state.topic = data
  },
  [types.USER] (state, {data, query}) {
    if (data.recent_topics && data.recent_topics.forEach) {
      data.recent_topics.forEach((item) => {
        item.user_href = '/cnode/user/' + item.author.loginname
        item.href = '/cnode/topic/' + item.id
      })
    }
    if (data.recent_replies && data.recent_replies.forEach) {
      data.recent_replies.forEach((item) => {
        item.user_href = '/cnode/user/' + item.author.loginname
        item.href = '/cnode/topic/' + item.id
      })
    }
    state.user = data
  },
  [types.DESTROYED] (state, {query}) {
    state[query.key] = query.value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
