# Calendar选择器

```
##:Calendar:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | Date, Array  |   -       |    -    |
| isRange     | 是否是区间   | Boolean  |   -       |    false    |
| isWeekRange     | 是否是周区间   | Boolean  |   -       |    false    |
| yearText     | 年文字   | Object  |   -       |    {EN: ' Year',ZH: '年'}    |
| monthText     | 月文字   | Object  |   -       |    return {EN: ' Month',ZH: '月'}    |
| weekText     | 周一到五文字   | Object  |   -       |    {EN: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Satur'],ZH: ['一', '二', '三', '四', '五', '六', '日']}    |
| layout     | 年月周日功能   | Array  |   -       |    ['year', 'month', 'week', 'date']    |
| lang     | 国际化选项   | String  |   ZH,EN       |   ZH    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发事件 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |