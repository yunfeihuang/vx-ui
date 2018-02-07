# Prompt输入对话框

```html
<template>
  <div>
    <group>
      <cell :arrow="false">
        <div slot="title">开关(用户名称：{{value1}})</div>
        <x-switch slot="value" v-model="open1"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">开关(用户密码：{{value2}})</div>
        <x-switch slot="value" v-model="open2"/>
      </cell>
    </group>
    <prompt
      v-model="value1"
      title="用户名称"
      :open.sync="open1"
      :disabled="disabled1"
      :input-props="{placeholder:'请输入用户名称'}"
      @change="handleChangePrompt1">
    </Prompt>
    <prompt
      v-model="value2"
      title="Wifi密码"
      :open.sync="open2"
      :disabled="disabled2"
      :input-props="{placeholder:'请输入wifi密码',type:'password'}"
      @change="handleChangePrompt2">
    </prompt>
  <div>
</template>
<script>
  export default {
    methods: {
      handleChangePrompt1 (value) {
        if (value && value.trim()) {
          this.disabled1 = false
        } else {
          this.disabled1 = true
        }
      },
      handleChangePrompt2 (value) {
        if (value && value.trim()) {
          this.disabled2 = false
        } else {
          this.disabled2 = true
        }
      },
      handleOpen () {
        this.$prompt({title: '用户名称', inputProps: {placeholder: '请输入用户名称'}}).then((value) => {
          console.log('prompt', value)
        }).catch(() => {
          console.log('cancel')
        })
      }
    },
    data () {
      return {
        value1: '',
        open1: false,
        disabled1: true,
        value2: '',
        open2: false,
        disabled2: true
      }
    }
  }
</script>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| open     | 是否打开   | Boolean  |   -       |    false    |
| history     | 打开是否产生浏览器历史记录   | Boolean  |   -       |    true    |
| confirmText     | 确定文字   | String  |   -       |    确定    |
| cancelText     | 取消文字   | String  |   -       |    取消    |
| title     | 标题文字   | String  |   -       |    -    |
| disabled     | 控制确定按钮禁用状态   | Boolean  |   -       |    false    |
| value     | 值   | String  |   -       |    -    |
| inputProps     | 输入框组件props   | Object  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| confirm | 确定事件 | - |
| close | 关闭事件 | - |
| change | 值改变触发事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |