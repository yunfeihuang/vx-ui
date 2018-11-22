# ListView列表

```
##:ListView:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| loading     | 数据加载状态   | Boolean  |   -       |    false    |
| end     | 是否有更多   | Boolean  |   -       |    false    |
| loadingText     | 加载中的提示文字   | String  |   -       |    数据加载...    |
| pullDownText     | 下拉刷新的提示文字   | String  |   -       |    下拉刷新    |
| refreshText     | 释放刷新的提示文字   | String  |   -       |    释放刷新    |
| endText     | 没有更多的提示文字   | String  |   -       |    没有更多    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| pulldown | 下拉刷新事件(注册事件之后才会有下拉效果) | - |
| pullup | 上拉加载更多事件(注册事件之后才会有上拉效果) | - |
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |