# Cell单元块

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
| arrow     | 是否显示右箭头   | Boolean  |   -       |    true    |
| title     | 标题   | string  |   -       |    -    |
| value     | 值   | string  |   -       |    -    |
| to     | router-link to prop   | -  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| title | - |
| value | - |