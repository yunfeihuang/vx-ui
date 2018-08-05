# Password密码输入框

```
<template>
  <div>
    <group title="default">
      <password placeholder="请输入密码" v-model="value" :cipher.sync="cipher" :encrypt="encrypt"/>
    </group>
    <group title="初始明文">
      <password placeholder="请输入密码" v-model="value" native-type="text" :cipher.sync="cipher" :encrypt="encrypt"/>
    </group>
    密文(简单的转成大写)：{{cipher}}
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        cipher: ''
      }
    },
    methods: {
      encrypt (value, next) {
        next(value.toUpperCase())
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
| cipher     | 密文绑定属性   | String  |   -       |    -    |
| encrypt     | 加密函数   | Function  |   -       |    有value,next参数    |
| icons     |  明文与保密icons  | Array[String]  |   -       |    \['\<span class="vx-password-text-icon"\>abc\</span\>','\<span class="vx-password-pwd-icon"\>\</span\>'\]    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发 | value |
| focus | 得到焦点触发 | event |
| blur | 失去焦点触发 | event |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| prepend | 输入框前面插入内容 |
| append | 输入框后面插入内容 |