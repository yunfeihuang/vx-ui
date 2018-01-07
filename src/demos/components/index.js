import Vue from 'vue'
import XBody from './body'

let components = [
  XBody
]

const install = (Vue) => {
  components.map(component => {
    component.name && Vue.component(component.name, component)
  })
}

install(Vue)
