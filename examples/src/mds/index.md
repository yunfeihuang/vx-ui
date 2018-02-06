# 安装和快速上手

### 安装
``` html
  npm install vx-ui --save-dev
```

### 全局注册组件
``` html
  import Vue from 'vue'
  import 'vx-ui/lib/style/theme/index.css'
  import VxUI from 'vx-ui'
  Vue.use(VxUI)
```

### 单个注册组件(Button示例)
``` html
  import Vue from 'vue'
  import 'vx-ui/lib/style/theme/button.css'
  import { Button } from 'vx-ui' // or import Button from 'vx-ui/lib/button'
  import install from 'vx-ui/src/components/install' // 全局安装一次即可
  install(Vue)
  Vue.component(Button.name, Button)
```

### 修改UI主题风格

``` html
  #修改src/components/style/src/variable.scss变量后运行以下命令即可
  npm run build:theme
```

### 本组件库采用的是网易的rem适配方案
[相关资料请点击查看](https://www.cnblogs.com/noobfly/p/6207832.html)