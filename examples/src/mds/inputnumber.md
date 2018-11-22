# InputNumber输入框

```
##:InputNumber:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | Number  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| max     | 最大值   | Number  |   -       |    -    |
| min     | 最小值   | Number  |   -       |    -    |
| step     | 精确位置   | Number  |   -       |    1    |
| buttonStep     | 加减按钮累加减值   | Number  |   -       |    1    |

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