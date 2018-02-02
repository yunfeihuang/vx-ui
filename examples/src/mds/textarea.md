# Textarea文本域

``` html
<template>
  <div style="margin-top:20px;">
    <x-textarea v-model="value" placeholder="请输入消息内容" />
    <div style="padding:10px;color:#999">
    注：输入换行符或者更多内容我会自动”撑高“
    </div>
    <div style="padding:10px">{{value}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '亲，收到我的祝福么？'
    }
  }
}
</script>
```
### Select

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | Array[String]  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| max     | 最大选中数,0为不限制，1为单选   | Number  |   -       |    0    |
| maxlength     | 最大长度   | Number  |   -       |    -    |
| autocomplete     | 自动补全   | String  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发 | value |


#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |