<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Ripple"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group>
        <vx-ripple style="padding:0.3rem 0.2rem">
          点击我会出现波纹
        </vx-ripple>
        <vx-divider></vx-divider>
        <vx-ripple style="padding:0.3rem 0.2rem">
          点击我会出现波纹
        </vx-ripple>
        <vx-divider></vx-divider>
        <vx-ripple color="rgba(255,0,0,0.1)" style="padding:0.3rem 0.2rem">
          自定义颜色(prop color:rgba(255,0,0,0.1))
        </vx-ripple>
      </vx-group>
    </vx-page-body>
    <template v-slot:footer>
      <div style="text-align:center;padding:10px">
        ripple prop position:center
      </div>
      <vx-tabbar ripple v-model:active="active">
        <vx-tabbar-item :name="0">
          <i style="font-size:0.5rem;margin: -0.1rem;">★</i>
          <small>主页</small>
        </vx-tabbar-item>
        <vx-tabbar-item :name="1">
          <i style="font-size:0.5rem;margin: -0.1rem;">♡</i>
          <small>消息</small>
        </vx-tabbar-item>
        <vx-tabbar-item :name="3">
          <i style="font-size:0.5rem;margin: -0.1rem;">★</i>
          <small>我的</small>
        </vx-tabbar-item>
      </vx-tabbar>
    </template>
  </vx-page>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">

</style>
