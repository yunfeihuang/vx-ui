# Prompt输入对话框

```
##:Prompt:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| open     | 是否打开   | Boolean  |   -       |    false    |
| history     | 打开是否产生浏览器历史记录   | Boolean  |   -       |    true    |
| confirmText     | 确定文字   | String  |   -       |    确定    |
| cancelText     | 取消文字   | String  |   -       |    取消    |
| title     | 标题文字   | String  |   -       |    -    |
| disabled     | 控制确定按钮禁用状态   | Boolean  |   -       |    false    |
| modelValue     | 值   | String  |   -       |    -    |
| inputProps     | 输入框组件props   | Object  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| confirm | 确定事件 | - |
| close | 关闭事件 | - |
| update:modelValue| 值改变触发事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |
| message | 辅助性文字 |