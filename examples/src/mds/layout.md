# Layout布局

```
<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Layout --- header area</div>
    </x-nav>
    <flexbox-item slot="body">body area</flexbox-item>
    <div slot="footer">footer area</div>
    <div>other area</div>
  </layout>
</template>
```
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |----------|-------------|--------- |
|     -     |    -    |     -    |      -      |     -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
|    -    |    -   |    -    |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | 其他，如弹框等 |
| header | 头部 |
| body | 主体 |
| footer | 底部 |