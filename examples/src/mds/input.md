# Input输入框

```
<template>
  <div>
    <group title="default">
      <x-input placeholder="请输入帐号" v-model="value"/>
    </group>
    <group title="slot prepend&append">
      <x-input placeholder="请输入帐号" v-model="value">
        <span slot="prepend" style="padding:10px;">♡</span>
        <span slot="append" style="padding:10px;">★</span>
      </x-input>
      注意：password,datetime,datarange,select,cascader等都支持这两个slot
    </group>
    <group title="disabled">
      <x-input placeholder="请输入帐号" v-model="value" disabled/>
    </group>
  </div>
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
| value     | 值   | Array[String]  |   -       |    -    |
| placeholder     | 占位文本   | String  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| border     | 是否显示边框   | Boolean  |   -       |    true    |
| maxlength     | 最大长度   | Number  |   -       |    -    |
| native-type     | 原生type属性   | String  |   -       |    -    |
| clear     | 是否有清除按钮   | Boolean  |   -       |    true    |
| arrow     | 是否显示箭头图标   | Boolean  |   -       |    true    |
| arrowProps     | 箭头图标props,参考Arrow组件   | Object  |   -       |    -    |

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