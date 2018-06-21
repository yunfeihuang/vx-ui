# vx-ui

> vue components 移动端UI组件库
>

#### 中文文档：
http://vx.bittyos.com/
#### 示例浏览地址：
http://vx.bittyos.com/demo/

![Minion](http://vx.bittyos.com/static/images/demo-code.png)

#### CNode社区示例浏览地址：
http://vx.bittyos.com/demo/#/cnode/

#### react版本：
https://github.com/yunfeihuang/react-components

## Build Setup

``` bash
# install dependencies
npm install vx-ui --save-dev

# 全局注册组件
import Vue from 'vue'
import 'vx-ui/lib/style/theme/index.css'
import VxUI from 'vx-ui'
Vue.use(VxUI)

# 单个注册组件(Button示例)
import Vue from 'vue'
import 'vx-ui/lib/style/theme/button.css'
import { Button } from 'vx-ui' // or import Button from 'vx-ui/lib/button'
Vue.component(Button.name, Button)


# 修改UI主题风格
##### 修改src/components/style/src/variable.scss变量后运行以下命令即可
npm run build:theme
```

#### 打赏赞助，请扫以下二维码，谢谢！
![Minion](http://vx.bittyos.com/static/images/pay-code.png?v=0.1)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
