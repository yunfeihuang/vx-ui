<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Sidebar</div>
    </x-nav>
    <x-body slot="body" style="background:#fff">
      <sidebar :active.sync="active" class="sidebar">
        <sidebar-item v-for="item in data" :name="item.name" :key="item.name">{{item.label}}</sidebar-item>
      </sidebar>
    </x-body>
  </layout>
</template>

<script>
export default {
  data () {
    let data = []
    for (let i = 0; i < 20; i++) {
      data.push({
        name: i,
        label: `选项${i}`
      })
    }
    return {
      data,
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
