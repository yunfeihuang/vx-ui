# Daterange日期区间输入框

```html
<template>
  <group title="default">
    <daterange v-model="date" placeholder="请输入日期区间"/>
  </group>
</template>
<script>
  export default {
    data () {
      return {
        date: null
      }
    }
  }
</script>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | Array[String]  |   -       |    -    |
| placeholder     | 占位文本   | String  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| clear     | 是否有清除按钮   | Boolean  |   -       |    false    |
| format     | 日期格式   | Boolean  |   -       |    yyyy-MM-dd    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发 | value |
| focus | 得到焦点触发 | event |
| blur | 失去焦点触发 | event |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |