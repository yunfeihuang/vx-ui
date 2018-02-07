# Button按钮

```html
<template>
  <x-button>default</x-button>
  <x-button type="primary">primary</x-button>
  <x-button type="dashed">dashed</x-button>
  <x-button type="warning">warning</x-button>
  <x-button type="primary" disabled>disabled</x-button>
</template>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| type     | 按钮类型   | String  |   default,primary,dashed,warning       |    default    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| nativeType     | 原生type类型   | -  |   -       |    button    |
| -     | -   | -  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |