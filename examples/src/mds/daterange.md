# Daterange日期区间输入框

```
##:Daterange:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | Array[String]  |   -       |    -    |
| placeholder     | 占位文本   | String  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| clear     | 是否有清除按钮   | Boolean  |   -       |    false    |
| format     | 日期格式   | Boolean  |   -       |    yyyy-MM-dd    |
| separator     | 区间日期的分割符号   | String  |   -       |    ~    |
| arrow     | 是否显示箭头图标   | Boolean  |   -       |    true    |
| arrowProps     | 箭头图标props,参考Arrow组件   | Object  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发 | value |
| focus | 得到焦点触发 | event |
| blur | 失去焦点触发 | event |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| prepend | 输入框前面插入内容 |
| append | 输入框后面插入内容 |