<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Ripple</div>
    </x-nav>
    <x-body slot="body">
      <group class="ripple-demo">
        <ripple>
          点击我会出现波纹
        </ripple>
        <divider></divider>
        <ripple>
          点击我会出现波纹
        </ripple>
        <divider></divider>
        <ripple color="rgba(255,0,0,0.1)">
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
          <icon>&#xe651;</icon>
          <span>主页</span>
        </tabbar-item>
        <tabbar-item :name="1">
          <icon>&#xe653;</icon>
          <span>消息</span>
        </tabbar-item>
        <tabbar-item :name="3">
          <icon>&#xe63b;</icon>
          <span>我的</span>
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
  .ripple-demo{
    line-height:44px;
    text-indent:10px;
  }
</style>
