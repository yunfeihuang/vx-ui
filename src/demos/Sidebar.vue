<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Sidebar</div>
    </x-nav>
    <x-body slot="body" style="background:#fff">
      <sidebar @on-change="changeHandler" :active="active" class="sidebar">
        <sidebar-item>家电</sidebar-item>
        <sidebar-item>手机</sidebar-item>
        <sidebar-item>电脑</sidebar-item>
        <sidebar-item>服装</sidebar-item>
        <sidebar-item>数码</sidebar-item>
        <sidebar-item>家纺</sidebar-item>
        <sidebar-item>运动</sidebar-item>
        <sidebar-item>汽车</sidebar-item>
        <sidebar-item>医药</sidebar-item>
        <sidebar-item>珠宝</sidebar-item>
        <sidebar-item>家电</sidebar-item>
        <sidebar-item>手机</sidebar-item>
        <sidebar-item>电脑</sidebar-item>
        <sidebar-item>服装</sidebar-item>
        <sidebar-item>数码</sidebar-item>
        <sidebar-item>家纺</sidebar-item>
        <sidebar-item>运动</sidebar-item>
        <sidebar-item>汽车</sidebar-item>
        <sidebar-item>医药</sidebar-item>
        <sidebar-item>珠宝</sidebar-item>
      </sidebar>
    </x-body>
  </layout>
</template>

<script>
export default {
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
  .sidebar{
    width:80px;
    background:#f7f7f7;
    position:absolute;
    height:100%;
    top:0;
    left:0;
  }
</style>
