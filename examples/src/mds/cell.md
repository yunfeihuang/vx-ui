# Cell单元块

```
<template>
  <group title="default">
    <cell title="标题">
      <img style="height:20px;width:20px;border-radius:50%" slot="icon" :src="'/static/images/github.png'">
      <x-switch slot="value" v-model="checked" />
    </cell>
  </group>
  <group title="no arrow">
    <cell :arrow="false" title="标题">
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
| title     | 标题   | String  |   -       |    -    |
| value     | 值   | String  |   -       |    -    |
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
| icon | - |