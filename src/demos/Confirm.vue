<template>
  <page>
    <x-nav slot="header" title="Confirm"></x-nav>
    <page-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">开关</div>
          <x-switch slot="value" v-model="open1"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">长内容</div>
          <x-switch slot="value" v-model="open2"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">js调用</div>
          <span slot="value" @click="handleOpen">点击我打开</span>
        </cell>
      </group>
    </page-body>
    <confirm :open.sync="open1">确认删除？</confirm>
    <confirm :open.sync="open2" title="标题">
      <div style="line-height:2.5;">
        长内容长内容长内容长内容长内容长内容长长内容长内容长内容长内容长内容长
        内容长内容长内容长内容长内容长内容长内容长内容长内容长内容内容长内容长内
        容长内容长内容长内容长内容长内容长内容
        长内容长内容长内容长内容长内容长内容长长内容长内容长内容长内容长内容长
        内容长内容长内容长内容长内容长内容长内容长内容长内容长内容内容长内容长内
        容长内容长内容长内容长内容长内容长内容
        长内容长内容长内容长内容长内容长内容长长内容长内容长内容长内容长内容长
        内容长内容长内容长内容长内容长内容长内容长内容长内容长内容内容长内容长内
        容长内容长内容长内容长内容长内容长内容
      </div>
    </confirm>
  </page>
</template>

<script>
export default {
  data () {
    return {
      open1: false,
      open2: false
    }
  },
  methods: {
    handleOpen () {
      this.$confirm({
        message: '请选择支付方式',
        cancelText: '支付宝支付',
        cancelLight: true,
        confirmText: '微信支付',
        onButtonClick: event => {
          console.log('onButtonClick', event)
        }
      }).then(() => {
        console.log('confirm')
      }).catch(() => {
        console.log('cancel')
      })
    }
  }
}
</script>
