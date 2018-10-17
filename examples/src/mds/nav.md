# Nav导航

```
<template>
  <div>
    <x-nav back="/" back-text="返回">
      <button class="btn-pull" slot="pull">
        更多
      </button>
    </x-nav>
    <br />
    <x-nav back="/" back-text="返回" type="primary" title="Nav">
      <button class="btn-pull" slot="pull">
        更多
      </button>
    </x-nav>
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

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| title     | 标题   | String  |   -       |    -    |
| isBack     | 是否有后退按钮   | Boolean  |   -       |    true    |
| to     | 后退地址   | -  |   -       |    -    |
| onBack     | 默认是后退   | functon  |   -       |    history.back()    |
| backText     | 后退按钮文字   | String  |   -       |    返回    |
| type     | 导航条类型   | String  |   default|primary       |    default    |
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