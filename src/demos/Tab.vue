<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Tab</div>
      <tab :active.sync="active">
        <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
      </tab>
      <tab :active.sync="active" :underline-width="10">
        <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
      </tab>
      <tab :active.sync="active" underline-width="auto">
        <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
      </tab>
    </x-nav>
    <x-body slot="body" style="background:#fff" :scroll="false">
      <!--
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
      -->
    </x-body>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {name: 'recommed', label: '推荐'},
        {name: 'it', label: '科技'},
        {name: 'active', label: '活动'},
        {name: 'find', label: '发现'}
      ],
      active: 'recommed'
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
