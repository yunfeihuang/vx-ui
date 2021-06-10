<template>
  <page>
    <x-nav slot="header" title="Toast"></x-nav>
    <page-body slot="body">
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
          <div slot="title">Toast Center Error</div>
          <x-switch slot="value" v-model="errorOpen"/>
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
        <cell :arrow="false">
          <div slot="title">js调用</div>
          <span slot="value" @click="handleOpen">点击我打开</span>
        </cell>
      </group>
    </page-body>
    <toast v-model:open="topOpen">{{message}}</toast>
    <toast v-model:open="centerOpen" type="success" align="center">{{message}}</toast>
    <toast v-model:open="errorOpen" type="error" align="center">操作失败</toast>
    <toast v-model:open="warnOpen" type="warn" align="center">已经操作过了</toast>
    <toast v-model:open="loadingOpen" type="loading" align="center">Loading</toast>
    <toast v-model:open="bottomOpen" align="bottom">{{message}}</toast>
  </page>
</template>

<script>
export default {
  data () {
    return {
      topOpen: false,
      centerOpen: false,
      loadingOpen: false,
      bottomOpen: false,
      errorOpen: false,
      warnOpen: false,
      message: '操作成功'
    }
  },
  methods: {
    handleOpen () {
      this.$toast({
        message: this.message,
        type: 'loading'
      })
    }
  }
}
</script>

<style lang="scss">

</style>
