<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Confirm"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group>
        <vx-cell :arrow="false">
          <template v-slot:title>开关</template>
          <template v-slot:value><vx-switch v-model="open1"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>长内容</template>
          <template v-slot:value><vx-switch v-model="open2"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>js调用</template>
          <template v-slot:value><span @click="handleOpen">点击我打开</span></template>
        </vx-cell>
      </vx-group>
    </vx-page-body>
    <vx-confirm v-model:open="open1">确认删除？</vx-confirm>
    <vx-confirm v-model:open="open2" title="标题">
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
    </vx-confirm>
  </vx-page>
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
