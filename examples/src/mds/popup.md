# Popup自定义弹框

```
##:Popup:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| open     | 是否打开   | Boolean  |   -       |    false    |
| history     | 打开是否产生浏览器历史记录   | Boolean  |   -       |    true    |
| full     | 是否占满屏   | Boolean  |   -       |    false    |
| showClose     | 是否显示关闭按钮   | Boolean  |   -       |    false    |
| direction     | 渐入方向   | String  |   bottom,top,left,right,center       |    bottom    |
| fastClose     | 是否非内容区域关闭   | Boolean  |   -       |    true    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| open | 打开后事件 | - |
| close| 关闭事件 | - |
| after-close| 关闭结束后事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |