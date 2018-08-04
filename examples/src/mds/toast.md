# Toast提示语

```
<template>
  <div>
    <group>
      <cell :arrow="false">
        <div slot="title">Toast Top</div>
        <x-switch slot="value" v-model="topOpen"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">Toast Center Success</div>
        <x-switch slot="value" v-model="centerOpen"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">Toast Center Error</div>
        <x-switch slot="value" v-model="errorOpen"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">Toast Center Warn</div>
        <x-switch slot="value" v-model="warnOpen"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">Toast Center Loading</div>
        <x-switch slot="value" v-model="loadingOpen"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">Toast Bottom</div>
        <x-switch slot="value" v-model="bottomOpen"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">js调用</div>
        <span slot="value" @click="handleOpen">点击我打开</span>
      </cell>
    </group>
    <toast :open.sync="topOpen">{{message}}</toast>
    <toast :open.sync="centerOpen" type="success" align="center">{{message}}</toast>
    <toast :open.sync="errorOpen" type="error" align="center">操作失败</toast>
    <toast :open.sync="warnOpen" type="warn" align="center">已经操作过了</toast>
    <toast :open.sync="loadingOpen" type="loading" align="center">Loading</toast>
    <toast :open.sync="bottomOpen" align="bottom">{{message}}</toast>
  <div>
</template>
<script>
  export default {
    data () {
      return {
        topOpen: false,
        centerOpen: false,
        loadingOpen: false,
        bottomOpen: false,
        errorOpen: false,
        warnOpen: false,
        message: '操作成功'
      }
    },
    methods: {
      handleOpen () {
        this.$toast({
          message: this.message
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
| align     | 提示位置   | String  |   bottom,top,center       |    false    |
| type     | 提示类型   | String  |   default,error,success,warn,loading       |    bottom    |
| duration     | 停留时间   | Number  |   -       |    2000    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| close | 关闭事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |