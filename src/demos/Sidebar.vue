<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Sidebar</div>
    </x-nav>
    <x-body slot="body" style="background:#fff">
      <sidebar :active.sync="active" class="sidebar">
        <sidebar-item name="1">家电</sidebar-item>
        <sidebar-item name="2">手机</sidebar-item>
        <sidebar-item name="3">电脑</sidebar-item>
        <sidebar-item name="4">服装</sidebar-item>
        <sidebar-item name="5">数码</sidebar-item>
        <sidebar-item name="6">家纺</sidebar-item>
        <sidebar-item name="7">运动</sidebar-item>
        <sidebar-item name="8">汽车</sidebar-item>
        <sidebar-item name="9">医药</sidebar-item>
        <sidebar-item name="10">珠宝</sidebar-item>
        <sidebar-item name="11">家电</sidebar-item>
        <sidebar-item name="12">手机</sidebar-item>
        <sidebar-item name="13">电脑</sidebar-item>
        <sidebar-item name="14">服装</sidebar-item>
        <sidebar-item name="15">数码</sidebar-item>
        <sidebar-item name="16">家纺</sidebar-item>
        <sidebar-item name="17">运动</sidebar-item>
        <sidebar-item name="18">汽车</sidebar-item>
        <sidebar-item name="19">医药</sidebar-item>
        <sidebar-item name="20">珠宝</sidebar-item>
      </sidebar>
    </x-body>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      active: '1'
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
