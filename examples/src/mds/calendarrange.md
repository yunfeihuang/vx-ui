# Picker选择器

```html
<template>
  <div>
    <group :title="`日期区间选择器：${value.map(item => item.toLocaleDateString ? item.toLocaleDateString(): item)}`">
      <calendar-range v-model="value"/>
    </group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: []
    }
  }
}
</script>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | Date, Array  |   -       |    -    |
| yearText     | 年文字   | String  |   -       |    年    |
| monthText     | 月文字   | String  |   -       |    月    |
| weekText     | 周一到五文字   | Array  |   -       |    ['周一', '周二', '周三', '周四', '周五', '周六', '周日']    |
| tabText     | 选项卡文字   | Object  |   -       |    {date: '日历',week: '周历',month: '月历',quarter: '季度'}    |
| layout     | 选项卡功能   | Array  |   -       |    ['date', 'week', 'month', 'quarter']    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发事件 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |