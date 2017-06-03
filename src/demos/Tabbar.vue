<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Tabbar</div>
    </x-header>
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
      <tabbar-item text="主页" icon="&#xe651;"/>
      <tabbar-item text="消息" icon="&#xe653;"/>
      <tabbar-item text="我的" icon="&#xe63b;"/>
    </tabbar>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Tabbar,
  TabbarItem,
  Swiper,
  SwiperItem
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Tabbar,
    TabbarItem,
    Swiper,
    SwiperItem
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
