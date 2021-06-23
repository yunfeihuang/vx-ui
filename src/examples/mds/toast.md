# Toast提示语

```
##:Toast:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| open     | 是否打开   | Boolean  |   -       |    false    |
| align     | 提示位置   | String  |   bottom,top,center       |    false    |
| type     | 提示类型   | String  |   default,error,success,warn,loading       |    bottom    |
| duration     | 停留时间   | Number  |   -       |    2000    |
| isOverlay     | 是否有遮罩层   | Boolean  |   -       |    -    |
| overlayOpacity     | 遮罩层透明值   | Number  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| close | 关闭事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |