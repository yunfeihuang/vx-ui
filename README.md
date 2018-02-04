# vx-ui

> vue components 移动端UI组件库
>
示例浏览地址：
http://vx.bittyos.com/demo/

## Build Setup

``` bash
# install dependencies
npm install vx-ui

# 全局注册组件
import Vue from 'vue'
import VxUI from 'vx-ui'
Vue.use(VxUI)

# 单个注册组件
import Vue from 'vue'
import { Button } from 'vx-ui' // or import Button from 'vx-ui/lib/button'
Vue.component(Button.name, Button)
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
