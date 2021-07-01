# Picker选择器

```
##:Picker:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| modelValue     | 值   | String  |   -       |    -    |
| placeholder     | 占位文本   | String  |   -       |    请选择    |
| options     | 选项列表   | Array[{value,label}]  |   -       |    -    |
| rows     | 值   | Number  |   -       |    -7    |
| rowHeight     | 值   | Number  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| update:modelValue| 值改变触发事件 | value |
| confirm| 确定事件 | value |
| cancel| 取消事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |