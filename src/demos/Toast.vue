<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Toast</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">Toast Top</div>
          <x-switch slot="value" v-model="topOpen"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Center Success</div>
          <x-switch slot="value" v-model="centerOpen"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Center Fail</div>
          <x-switch slot="value" v-model="failOpen"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Center Warn</div>
          <x-switch slot="value" v-model="warnOpen"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Center Loading</div>
          <x-switch slot="value" v-model="loadingOpen"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Bottom</div>
          <x-switch slot="value" v-model="bottomOpen"/>
        </cell>
      </group>
    </x-body>
    <toast :open.sync="topOpen">{{content}}</toast>
    <toast :open.sync="centerOpen" type="success" align="center">{{content}}</toast>
    <toast :open.sync="failOpen" type="fail" align="center">操作失败</toast>
    <toast :open.sync="warnOpen" type="warn" align="center">已经操作过了</toast>
    <toast :open.sync="loadingOpen" type="loading" align="center">Loading</toast>
    <toast :open.sync="bottomOpen" align="bottom">{{content}}</toast>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      topOpen: false,
      centerOpen: false,
      loadingOpen: false,
      bottomOpen: false,
      failOpen: false,
      warnOpen: false,
      content: '操作成功'
    }
  }
}
</script>

<style lang="scss">

</style>
