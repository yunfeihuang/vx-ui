<template>
  <layout>
    <x-nav slot="header" back="/" title="Ripple"></x-nav>
    <x-body slot="body">
      <group>
        <ripple style="padding:0.3rem 0.2rem">
          点击我会出现波纹
        </ripple>
        <divider></divider>
        <ripple style="padding:0.3rem 0.2rem">
          点击我会出现波纹
        </ripple>
        <divider></divider>
        <ripple color="rgba(255,0,0,0.1)" style="padding:0.3rem 0.2rem">
          自定义颜色(prop color:rgba(255,0,0,0.1))
        </ripple>
      </group>
    </x-body>
    <div slot="footer">
      <div style="text-align:center;padding:10px">
        ripple prop position:center
      </div>
      <tabbar :ripple="true" :active.sync="active">
        <tabbar-item :name="0">
          <i style="font-size:0.5rem;margin: -0.1rem;">★</i>
          <small>主页</small>
        </tabbar-item>
        <tabbar-item :name="1">
          <i style="font-size:0.5rem;margin: -0.1rem;">♡</i>
          <small>消息</small>
        </tabbar-item>
        <tabbar-item :name="3">
          <i style="font-size:0.5rem;margin: -0.1rem;">★</i>
          <small>我的</small>
        </tabbar-item>
      </tabbar>
    </div>
  </layout>
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
