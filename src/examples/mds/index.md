# 安装和快速上手

### 安装
```
  npm install vx-ui --save-dev
```

### 全局注册组件
```
  import {createApp} from 'vue'
  import App from './App'
  import 'vx-ui/lib/style/theme/index.css'
  import VxUI from 'vx-ui'
  createApp(App).use(VxUI)
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
  #修改src/components/style/src/variable.scss变量后运行以下命令即可
  npm run build:theme
```

### 本组件库采用的是网易的rem适配方案
[相关资料请点击查看](https://www.cnblogs.com/noobfly/p/6207832.html)
