# Button按钮

```html
<template>
  <x-button ref="button">default</x-button>
  <x-button type="primary">primary</x-button>
  <x-button type="danger">danger</x-button>
  <x-button type="warning">warning</x-button>
  <x-button type="primary" plain>plain primary</x-button>
  <x-button type="danger" plain>plain danger</x-button>
  <x-button type="warning" plain>plain warning</x-button>
  <x-button disabled>disabled</x-button>
  <x-button type="primary" disabled>primary disabled</x-button>
  <x-button type="danger" plain disabled>plain danger disabled</x-button>
</template>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| type     | 按钮类型   | String  |   default,primary,dashed,warning       |    default    |
| size     | 按钮大小型   | String  |   default,large       |    default    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| loading     | 是否加载状态   | Boolean  |   -       |    false    |
| plain     | 是否plain风格   | Boolean  |   -       |    false    |
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