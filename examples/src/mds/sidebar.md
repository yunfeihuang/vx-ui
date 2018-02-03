# Sidebar选项卡

```html
<template>
  <div>
    <sidebar :active.sync="active" class="sidebar">
      <sidebar-item v-for="item in data" :name="item.name" :key="item.name">{{item.label}}</sidebar-item>
    </sidebar>
  </div>
</template>
<script>
  export default {
    data () {
      let data = []
      for (let i = 0; i < 20; i++) {
        data.push({
          name: i,
          label: `选项${i}`
        })
      }
      return {
        data,
        active: 0
      }
    }
  }
</script>
<style lang="css">
  .sidebar{
    width:80px;
    background:#f7f7f7;
    position:absolute;
    height:100%;
    top:0;
    left:0;
  }
</style>
```

### Sidebar
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| active     | 激活项(与子项名相同时是激活状态)   | String,Number  |   -       |    -    |
| activeClass     | 激活项的class   | -  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 激活项改变事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |

### SidebarItem
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