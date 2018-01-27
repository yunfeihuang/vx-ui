<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Toast</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">Toast Top</div>
          <x-switch slot="value" :value="topOpen" @on-change="handleChangeT"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Center Success</div>
          <x-switch slot="value" :value="centerOpen" @on-change="handleChangeC"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Center Fail</div>
          <x-switch slot="value" :value="failOpen" @on-change="handleChangeF"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Center Warn</div>
          <x-switch slot="value" :value="warnOpen" @on-change="handleChangeW"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Center Loading</div>
          <x-switch slot="value" :value="loadingOpen" @on-change="handleChangeL"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Bottom</div>
          <x-switch slot="value" :value="bottomOpen" @on-change="handleChangeB"/>
        </cell>
      </group>
    </x-body>
    <toast :open="topOpen" @on-close="handleChangeT">{{content}}</toast>
    <toast :open="centerOpen" type="success" align="center" @on-close="handleChangeC">{{content}}</toast>
    <toast :open="failOpen" type="fail" align="center" @on-close="handleChangeF">操作失败</toast>
    <toast :open="warnOpen" type="warn" align="center" @on-close="handleChangeW">已经操作过了</toast>
    <toast :open="loadingOpen" type="loading" align="center" @on-close="handleChangeL">Loading</toast>
    <toast :open="bottomOpen" align="bottom" @on-close="handleChangeB">{{content}}</toast>
  </layout>
</template>

<script>
export default {
  methods: {
    handleChangeT () {
      this.topOpen = !this.topOpen
    },
    handleChangeC () {
      this.centerOpen = !this.centerOpen
    },
    handleChangeL () {
      this.loadingOpen = !this.loadingOpen
    },
    handleChangeB () {
      this.bottomOpen = !this.bottomOpen
    },
    handleChangeF () {
      this.failOpen = !this.failOpen
    },
    handleChangeW () {
      this.warnOpen = !this.warnOpen
    }
  },
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
