<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Tabbar"></vx-nav>
    </template>
    <vx-page-body>
    </vx-page-body>
    <template v-slot:footer>
      <vx-tabbar ripple v-model:active="active">
        <vx-tabbar-item name="home">
          <i style="font-size:0.5rem;margin: -0.1rem;">★</i>
          <small>主页</small>
        </vx-tabbar-item>
        <vx-tabbar-item name="message">
          <i style="font-size:0.5rem;margin: -0.1rem;">♡</i>
          <small>消息</small>
        </vx-tabbar-item>
        <vx-tabbar-item name="my">
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
      active: 'home'
    }
  }
}
</script>

<style lang="scss">

</style>
