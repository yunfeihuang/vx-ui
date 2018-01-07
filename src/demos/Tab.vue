<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Tab</div>
       <tab :active.sync="active">
        <tab-item>推荐</tab-item>
        <tab-item>科技</tab-item>
        <tab-item>活动</tab-item>
        <tab-item>发现</tab-item>
      </tab>
      <tab :active.sync="active" :underline-width="10">
        <tab-item>推荐</tab-item>
        <tab-item>科技</tab-item>
        <tab-item>活动</tab-item>
        <tab-item>发现</tab-item>
      </tab>
      <tab :active.sync="active" underline-width="auto">
        <tab-item>推荐</tab-item>
        <tab-item>科技</tab-item>
        <tab-item>活动</tab-item>
        <tab-item>发现</tab-item>
      </tab>
    </x-nav>
    <x-body slot="body" style="background:#fff" :scroll="false">
      <swiper :active.sync="active" class="tab-swiper">
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
  XNav,
  Tab,
  TabItem,
  Swiper,
  SwiperItem
} from 'components'
export default {
  components: {
    Layout,
    XNav,
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
