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
import { children } from 'utils/mixins/page'
export default {
  mixins: [children],
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
