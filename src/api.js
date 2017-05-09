const fetch = window.fetch

export default {
  global () {
    return fetch('/global').then((res) => {
      return res.json()
    })
  },
  cnode: {
    list (query) {
      return fetch(`https://cnodejs.org/api/v1/topics?page=${query.page}&tab=${query.tab}`).then((res) => {
        return res.json()
      })
    },
    topic (query) {
      return fetch(`https://cnodejs.org/api/v1/topic/${query.id}`).then((res) => {
        return res.json()
      })
    },
    user (query) {
      return fetch(`https://cnodejs.org/api/v1/user/${query.id}`).then((res) => {
        return res.json()
      })
    }
  }
}
