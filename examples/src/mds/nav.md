# Group分组

```
<template>
  <x-nav slot="header" back="/" back-text="返回">
    <div slot="title">XNav</div>
    <button class="btn-pull" slot="pull">
      更多
    </button>
    <tab :active.sync="active" :underline-width="10">
      <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
    </tab>
    </x-nav>
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

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| isBack     | 是否有后退按钮   | Boolean  |   -       |    true    |
| to     | 后退地址   | -  |   -       |    -    |
| onBack     | 默认是后退   | functon  |   -       |    history.back()    |
| backText     | 后退按钮文字   | String  |   -       |    返回    |
| arrow     | 返回箭头   | Object  |   -       |    {size: '2.4rem', color: '#fff'}    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| title | 标题 |
| pull | 右侧操作区域 |
| default | 其他区域 |