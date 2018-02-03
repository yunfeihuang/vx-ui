# Search搜索

```html
<template>
  <search v-model="value" placeholder="搜索商品/商店/用户"
    @submit="handleSubmit">
    <div slot="keywords">
      <span class="keyword">
        上海
      </span>
      <span class="keyword">
        武汉
      </span>
      <span class="keyword">
        深圳
      </span>
      <span class="keyword">
        南京
      </span>
      <span class="keyword">
        北京
      </span>
    </div>
    <div slot="result" style="text-align:center;padding:15px">
      搜索结果显示
    </div>
  </search>
</template>
<script>
  export default {
    methods: {
      handleSubmit (value) {
        console.log('handleSubmit')
      }
    },
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
| value     | 值   | Array[String]  |   -       |    -    |
| placeholder     | 占位文本   | String  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| maxlength     | 最大长度   | Number  |   -       |    -    |
| native-type     | 原生type属性   | String  |   -       |    -    |
| clear     | 是否有清除按钮   | Boolean  |   -       |    true    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发 | value |
| submit | 点搜索触发 | value |
| focus | 得到焦点触发 | event |
| blur | 失去焦点触发 | event |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| keywords | - |
| result | - |