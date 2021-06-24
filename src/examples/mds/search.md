# Search搜索

```
##:Search:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| modelValue     | 值   | String  |   -       |    -    |
| placeholder     | 占位文本   | String  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| fixedTop     | 是否固定顶部   | Boolean  |   -       |    true    |
| maxlength     | 最大长度   | Number  |   -       |    -    |
| native-type     | 原生type属性   | String  |   -       |    -    |
| clearable     | 是否有清除按钮   | Boolean  |   -       |    true    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| update:modelValue| 值改变触发 | value |
| submit | 点搜索触发 | value |
| focus | 得到焦点触发 | event |
| blur | 失去焦点触发 | event |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| keywords | - |
| result | - |