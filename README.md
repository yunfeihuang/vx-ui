# vx-ui
> vue3.X 移动端UI组件库
>

## 中文文档：
http://vx.bittyos.com/v3/

## 示例浏览地址：
http://vx.bittyos.com/v3/demo.html

## 安装
```
npm install vx-ui --save-dev
```

### 全局注册组件
```
import {createApp} from 'vue'
import App from './App'
import 'vx-ui/lib/style/theme/index.css'
import Vx from 'vx-ui'
createApp(App).use(Vx)
```

### 单个注册组件(Button示例)
```
import Vue from 'vue'
import App from './App'
import 'vx-ui/lib/style/theme/button.css'
import { Button } from 'vx-ui' // or import Button from 'vx-ui/lib/button'
createApp(App).component(Button.componentName, Button)
```

### 修改UI主题风格
```
#修改packages/style/src/variable.scss变量后运行以下命令即可
npm run build:theme
```
### vx-ui vue2.x版本的
https://github.com/yunfeihuang/vx-ui/tree/master

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
