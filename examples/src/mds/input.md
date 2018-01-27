# Input输入框

<x-input placeholder="请输入帐号" v-model="value"></x-input>
您输入了{{value}}

```html
<template>
  <x-input placeholder="请输入帐号" v-model="value" />
  您输入了{{value}}
</template>
<script>
  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| -     | -   | -  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |