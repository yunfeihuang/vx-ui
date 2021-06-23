# PopupPicker选择器

```
##:PopupPicker:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| open     | 是否打开   | Boolean  |   -       |    false    |
| history     | 打开是否产生浏览器历史记录   | Boolean  |   -       |    true    |
| confirmText     | 完成文字   | String  |   -       |    完成    |
| cancelText     | 取消文字   | String  |   -       |    取消    |
| pickers     | picker数组[{value,option,placeholder}]   | Array  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变事件 | - |
| confirm | 完成事件 | - |
| close | 关闭事件 | - |
| close-after | 关闭结束后事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |