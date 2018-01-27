# Password密码输入框

```html
<template>
  <password placeholder="请输入密码" v-model="value" />
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