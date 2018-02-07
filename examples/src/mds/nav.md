# Group分组

```html
<template>
  <x-nav slot="header" back="/">
    <div slot="title">XNav</div>
    <button class="btn-pull" slot="pull">
      <icon>&#xe78d;</icon>
    </button>
  </x-nav>
</template>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| back     | 是否有后退按钮   | String, Boolean, Function  |   -       |    true    |
| backText     | 后退按钮文字   | String  |   -       |    返回    |
| title     | 标题   | String  |   -       |    返回    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| title | 标题 |
| pull | 右侧操作区域 |