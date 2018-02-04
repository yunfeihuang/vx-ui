# 安装和快速上手

### 安装
``` html
  npm install vx-ui --save-dev
```

### 全局注册组件
``` html
  import Vue from 'vue'
  import VxUI from 'vx-ui'
  Vue.use(VxUI)
```

### 单个注册组件
``` html
  import Vue from 'vue'
  import { Button } from 'vx-ui' // or import Button from 'vx-ui/lib/button'
  Vue.component(Button.name, Button)
```