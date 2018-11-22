# Actionsheet

```
##:Actionsheet:##
```

### Actionsheet
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| type     | 类型   | String  |   default,menu       |    default    |
| open     | 是否打开   | Boolean  |   -       |    false    |
| history     | 打开是否产生浏览器历史记录   | Boolean  |   -       |    true    |
| cancel     | 是否有取消操作   | Boolean  |   -       |    false    |
| title     | 标题文字   | String  |   -       |    -    |
| cancelText     | 取消文字   | String  |   -       |    取消    |
| fastClose     | 是否非内容区域关闭   | Boolean  |   -       |    true    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| click | 点击菜单触发 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |

### ActionsheetItem
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | String  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |