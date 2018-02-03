# Tab选项卡

```html
<template>
  <div>
    <tab :active.sync="active">
      <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
    </tab>
    <tab :active.sync="active" :underline-width="10">
      <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
    </tab>
    <tab :active.sync="active" underline-width="auto">
      <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
    </tab>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tabs: [
          {name: 'recommed', label: '推荐'},
          {name: 'it', label: '科技'},
          {name: 'active', label: '活动'},
          {name: 'find', label: '发现'}
        ],
        active: 'recommed'
      }
    }
  }
</script>
```

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

### Tab
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| active     | 激活项(与子项名相同时是激活状态)   | String,Number  |   -       |    -    |
| activeClass     | 激活项的class   | -  |   -       |    -    |
| underlineWidth     | 标线宽度   | String  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 激活项改变事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |

### TabItem
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