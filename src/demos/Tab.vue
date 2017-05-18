<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Tab</div>
      <tab :active="active" @on-change="changeHandler">
        <tab-item>选项卡1</tab-item>
        <tab-item>选项卡2</tab-item>
        <tab-item>选项卡3</tab-item>
        <tab-item>选项卡4</tab-item>
      </tab>
    </x-header>
    <x-body slot="body" style="background:#fff" :scroll="false">
      <swiper :active="active" @on-change="changeHandler" class="tab-swiper">
        <swiper-item>
          <div class="tab-content">
            内容1
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-content">
            内容2
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-content">
            内容3
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-content">
            内容4
          </div>
        </swiper-item>
      </swiper>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Tab,
  TabItem,
  Swiper,
  SwiperItem
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Tab,
    TabItem,
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
  .tab-swiper{
    height:100%;
    min-height:300px;
  }
  .tab-content{
    padding:10px;
  }
</style>
