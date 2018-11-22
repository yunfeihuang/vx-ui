# Textarea文本域

```
##:Textarea:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | Array[String]  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| enterNumber     | 是否显示输入字数，要有maxlength属性   | Boolean  |   -       |    false    |
| maxlength     | 最大长度   | Number  |   -       |    -    |

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