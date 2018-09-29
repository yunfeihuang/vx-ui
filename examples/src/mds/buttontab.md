# ButtonTab选项卡

```
<template>
  <div>
    <x-nav>
      <div slot="title" style="text-align:center">
        <button-tab class="tab-button" :active.sync="active1" size="small" style="width:2.8rem;margin:auto">
          <button-tab-item name="tab1">选项1</button-tab-item>
          <button-tab-item name="tab2">选项2</button-tab-item>
        </button-tab>
      </div>
    </x-nav>
    <button-tab :active.sync="active2">
      <button-tab-item name="tab1">选项1</button-tab-item>
      <button-tab-item name="tab2">选项2</button-tab-item>
      <button-tab-item name="tab3">选项3</button-tab-item>
      <button-tab-item name="tab4">选项4</button-tab-item>
    </button-tab>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        active1: 'tab1',
        active2: 'tab1'
      }
    }
  }
</script>
```
### ButtonTab
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| active     | 激活项(与子项名相同时是激活状态)   | String,Number  |   -       |    -    |
| size     | 大小   | String  |   default,small       |    default    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 激活项改变事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |

### ButtonTabItem
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