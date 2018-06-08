import Vue from 'vue'
const requireComponent = require.context('.', true, /\.vue$/) // 找到components文件夹下以.vue命名的文件
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const component = componentConfig.default || componentConfig
  component.componentName && Vue.component(component.componentName, component)
})
