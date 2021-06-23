# Nav导航

```
##:Nav:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| title     | 标题   | String  |   -       |    -    |
| isBack     | 是否有后退按钮   | Boolean  |   -       |    true    |
| titleCenter     | 标题是否居中显示   | Boolean  |   -       |    -    |
| to     | 后退地址   | -  |   -       |    -    |
| onBack     | 默认是后退   | functon  |   -       |    history.back()    |
| backText     | 后退按钮文字   | String  |   -       |    返回    |
| type     | 导航条类型   | String  |   default|primary       |    default    |
| arrow     | 返回箭头   | Object  |   -       |    {size: '2.4rem', color: '#fff'}    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| title | 标题 |
| prepend | 左侧操作区域 |
| append | 右侧操作区域 |
| default | 其他区域 |