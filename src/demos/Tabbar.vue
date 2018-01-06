<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Tabbar</div>
    </x-nav>
    <x-body slot="body">
      <swiper :active="active" @on-change="changeHandler" class="tabbar-swiper">
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
    </x-body>
    <tabbar slot="footer" :ripple="true" @on-change="changeHandler" :active="active">
      <tabbar-item>
        <icon>&#xe651;</icon>
        <span>主页</span>
      </tabbar-item>
      <tabbar-item>
        <icon>&#xe653;</icon>
        <span>消息</span>
      </tabbar-item>
      <tabbar-item>
        <icon>&#xe63b;</icon>
        <span>我的</span>
      </tabbar-item>
    </tabbar>
  </layout>
</template>

<script>
import {
  Layout,
  XNav,
  XBody,
  Tabbar,
  TabbarItem,
  Swiper,
  SwiperItem,
  Icon
} from 'components'
export default {
  components: {
    Layout,
    XNav,
    XBody,
    Tabbar,
    TabbarItem,
    Swiper,
    SwiperItem,
    Icon
  },
  methods: {
    changeHandler (value) {
      this.active = value
    }
  },
  data () {
    return {
      active: 0
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
