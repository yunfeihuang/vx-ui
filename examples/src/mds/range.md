# Range滑块输入框

``` html
<template>
  <div>
    <group :title="`default(value:${value1})`">
      <div style="padding:10px">
        <range v-model="value1" />
      </div>
    </group>
    <group :title="`step:10(value:${value1})`">
      <div style="padding:10px">
        <range v-model="value1" :step="10" />
      </div>
    </group>
    <group :title="`min:10,max:50(value:${value2})`">
      <div style="padding:10px">
        <range :min="10" :max="50" v-model="value2" />
      </div>
    </group>
    <group title="disabled">
      <div style="padding:10px">
        <range v-model="value1" disabled />
      </div>
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
| max     | 最大值   | Number  |     -     |    100    |
| min     | 最小值   | Number  |     -     |    0    |
| step     | 步值   | Number  |     -     |    1    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | - | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |