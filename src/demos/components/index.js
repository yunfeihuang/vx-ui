import Vue from 'vue'
import Layout from './layout'
import XBody from './body'

let components = [
  Layout,
  XBody
]

const install = (Vue) => {
  components.map(component => {
    component.name && Vue.component(component.name, component)
  })
}

install(Vue)
