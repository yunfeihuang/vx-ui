<template>
  <layout>
    <x-nav slot="header" back="/" title="Tabbar"></x-nav>
    <x-body slot="body">
    </x-body>
    <tabbar slot="footer" ripple :active.sync="active">
      <tabbar-item name="home">
        <i style="font-size:0.5rem;margin: -0.1rem;">★</i>
        <small>主页</small>
      </tabbar-item>
      <tabbar-item name="message">
        <i style="font-size:0.5rem;margin: -0.1rem;">♡</i>
        <small>消息</small>
      </tabbar-item>
      <tabbar-item name="my">
        <i style="font-size:0.5rem;margin: -0.1rem;">★</i>
        <small>我的</small>
      </tabbar-item>
    </tabbar>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      active: 'home'
    }
  }
}
</script>

<style lang="scss">

</style>
