# Datetime日期输入框

```html
<template>
  <div>
    <message>注意：此示例要在移动设备体验哦~</message>
    <group title="default">
      <datetime v-model="date" placeholder="请输入年月日"/>
    </group>
    <group title="年月">
      <datetime v-model="date2" format="yyyy-MM" placeholder="请输入年月" />
    </group>
    <group title="年份">
      <datetime v-model="date3" format="yyyy" placeholder="请输入年份" />
    </group>
    <group title="时分秒">
      <datetime format="HH:mm:ss" v-model="time" placeholder="请输入时间"/>
    </group>
    <group title="时分">
      <datetime format="HH:mm" v-model="time2" placeholder="请输入时间"/>
    </group>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        date: null,
        date2: null,
        date3: null,
        datetime: null,
        time: null,
        time2: null
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