# Confirm确认对话框

```
##:Confirm:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| open     | 是否打开   | Boolean  |   -       |    false    |
| history     | 打开是否产生浏览器历史记录   | Boolean  |   -       |    true    |
| title     | 标题文字   | String  |   -       |    -    |
| confirmText     | 确定文字   | String  |   -       |    确定    |
| confirmTag     | 确定元素标签   | String  |   -       |    button    |
| confirmProps     | 确定元素props(为了应对打电话a[href="tel:fdafd"]等需求)   | Object  |   -       |    -    |
| cancelText     | 取消文字   | String  |   -       |    取消    |


#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| confirm | 确定事件 | - |
| close | 关闭事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |