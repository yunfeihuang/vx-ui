# Tabbar选项卡

```
<template>
  <div>
    <tabbar slot="footer" :ripple="true" :active.sync="active">
      <tabbar-item name="home">
        <i style="font-size:0.5rem;margin: -0.1rem;">★</i>
        <small>主页</small>
      </tabbar-item>
      <tabbar-item name="message">
        <i style="font-size:0.5rem;margin: -0.1rem;">♡</i>
        <small>消息</small>
      </tabbar-item>
      <tabbar-item name="my">
        <i style="font-size:0.5rem;margin: -0.1rem;">★</i>
        <small>我的</small>
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