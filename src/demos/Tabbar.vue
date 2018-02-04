<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Tabbar</div>
    </x-nav>
    <x-body slot="body">
      <!--
      <swiper :active.sync="active" class="tabbar-swiper">
        <swiper-item>
          <div class="tab-content">
            我是主页
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-content">
            消息在这
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-content">
            这里我的
          </div>
        </swiper-item>
      </swiper>
      -->
    </x-body>
    <tabbar slot="footer" :ripple="true" :active.sync="active">
      <tabbar-item name="home">
        <icon>&#xe651;</icon>
        <span>主页</span>
      </tabbar-item>
      <tabbar-item name="message">
        <icon>&#xe653;</icon>
        <span>消息</span>
      </tabbar-item>
      <tabbar-item name="my">
        <icon>&#xe63b;</icon>
        <span>我的</span>
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
  .tabbar-swiper{
    height:100%;
    min-height:300px;
    text-align:center;
    line-height:40px
  }
</style>
