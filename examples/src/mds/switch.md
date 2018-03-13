# Switch开关

``` html
<template>
  <div>
    <group title="default">
      <cell :arrow="false">
        <div slot="title">开关（{{checked}}）</div>
        <x-switch slot="value" v-model="checked" />
      </cell>
    </group>
    <group title="offValue:0,onValue:1">
      <cell :arrow="false">
        <div slot="title">开关（{{value}}）</div>
        <x-switch slot="value" v-model="value" on-value="1" off-value="0" />
      </cell>
    </group>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        checked: true,
        value: '0'
      }
    }
  }
</script>
```
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| -     | -   | -  |   -       |    -    |
| value     | 值   | String,Boolean  |     -     |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| onValue     | 选中的value设定值   | String  |   -       |    -    |
| offValue     | 没有选中的value设定值   | String  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | - | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |