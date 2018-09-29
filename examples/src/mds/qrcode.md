# Img图片

```
<template>
  <qrcode text="http://vue.bittyos.com/"/>
</template>
<script>
import Qrcode from 'vx-ui/lib/qrcode'
export default {
  components: {
    Qrcode
  }
}
</script>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| text     | 二维码文本   | String  |   -       |    -    |
| height     | 二维码图片高度   | number  |   -       |    200    |
| width     | 二维码图片宽度   | number  |   -       |    200    |


#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |