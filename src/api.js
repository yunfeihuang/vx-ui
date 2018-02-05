const fetch = (url) => {
  let xhr = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(new Error({success: false}))
        }
      }
    }
    xhr.open('GET', url, true)
    xhr.send(null)
  })
}

let options = {
  timeout: 40000,
  mode: 'cors'
}

export default {
  global () {
    return fetch('/global', options)
  },
  cnode: {
    list (query) {
      return fetch(`https://cnodejs.org/api/v1/topics?page=${query.page}&tab=${query.tab}`, options)
    },
    topic (query) {
      return fetch(`https://cnodejs.org/api/v1/topic/${query.id}`, options)
    },
    user (query) {
      return fetch(`https://cnodejs.org/api/v1/user/${query.id}`, options)
    }
  }
}
