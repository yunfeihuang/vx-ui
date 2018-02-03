# Group分组

```html
<template>
  <group title="default">
    <cell :arrow="false">
      <div slot="title">开关（{{checked}}）</div>
      <x-switch slot="value" v-model="checked" />
    </cell>
  </group>
</template>
<script>
  export default {
    data () {
      return {
        checked: true
      }
    }
  }
</script>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| title     | 标题   | String  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |