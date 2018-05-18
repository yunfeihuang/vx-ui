# Button按钮

```html
<template>
  <x-button>default</x-button>
  <x-button type="primary">primary</x-button>
  <x-button type="danger">danger</x-button>
  <x-button type="warning">warning</x-button>
  <x-button type="link">link</x-button>
  <x-button size="large">default large</x-button>
  <x-button type="primary" size="large">primary large</x-button>
  <x-button type="danger" size="large">primary large</x-button>
  <x-button type="warning" size="large">warning large</x-button>
  <x-button type="primary" size="large" plain>plain primary</x-button>
  <x-button type="danger" size="large" plain>plain danger</x-button>
  <x-button type="warning" size="large" plain>plain warning</x-button>
  <x-button disabled size="large">disabled</x-button>
  <x-button type="primary" size="large" disabled>primary disabled</x-button>
  <x-button type="primary" size="large" :loading="true">primary</x-button>
  <x-button size="large" ripple>default ripple</x-button>
  <x-button size="large" type="primary" ripple>primary ripple</x-button>
</template>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| type     | 按钮类型   | String  |   default,primary,dashed,warning       |    default    |
| size     | 按钮大小型   | String  |   default,large       |    default    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| ripple     | 是否有波纹特效   | Boolean  |   -       |    false    |
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