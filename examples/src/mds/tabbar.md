# Tabbar选项卡

```html
<template>
  <div>
    <tabbar slot="footer" :ripple="true" :active.sync="active">
      <tabbar-item name="home">
        <icon>&#xe651;</icon>
        <span>主页</span>
      </tabbar-item>
      <tabbar-item name="message">
        <icon>&#xe653;</icon>
        <span>消息</span>
      </tabbar-item>
      <tabbar-item name="my">
        <icon>&#xe63b;</icon>
        <span>我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        active: 'home'
      }
    }
  }
</script>
```

### Tabbar
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| active     | 激活项(与子项名相同时是激活状态)   | String,Number  |   -       |    -    |
| activeClass     | 激活项的class   | -  |   -       |    -    |
| ripple     | 是否需要波纹效果   | Boolean  |   -       |    false    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 激活项改变事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |

### TabbarItem
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| name     | 项名，唯一   | String,Number  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |