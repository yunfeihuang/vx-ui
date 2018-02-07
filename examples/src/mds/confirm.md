# Confirm确认对话框

```html
<template>
  <div>
    <group>
      <cell :arrow="false">
        <div slot="title">开关</div>
        <x-switch slot="value" v-model="open"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">js调用</div>
        <span slot="value" @click="handleOpen">点击我打开</span>
      </cell>
      <cell :arrow="false">
        <div slot="title">js调用</div>
        <span slot="value" @click="handleOpen">点击我打开</span>
      </cell>
    </group>
    <confirm :open.sync="open">确认删除？</confirm>
  <div>
</template>
<script>
  export default {
    data () {
      return {
        open: false
      }
    },
    methods: {
      handleOpen () {
        this.$confirm({content: '确认删除？'}).then(() => {
          console.log('confirm')
        }).catch(() => {
          console.log('cancel')
        })
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

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| confirm | 确定事件 | - |
| close | 关闭事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |