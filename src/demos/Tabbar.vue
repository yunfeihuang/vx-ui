<template>
  <page>
    <x-nav slot="header" title="Tabbar"></x-nav>
    <page-body slot="body">
    </page-body>
    <tabbar slot="footer" ripple v-model:active="active">
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
  </page>
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
