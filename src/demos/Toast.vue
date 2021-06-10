<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Toast"></vx-nav>
    </template>
    <vx-page-body>
      <group>
        <cell :arrow="false">
          <template v-slot:title>Toast Top</template>
          <template v-slot:value><vx-switch v-model="topOpen"/></template>
        </cell>
        <cell :arrow="false">
          <template v-slot:title>Toast Center Success</template>
          <template v-slot:value><vx-switch v-model="centerOpen"/></template>
        </cell>
        <cell :arrow="false">
          <template v-slot:title>Toast Center Error</template>
          <template v-slot:value><vx-switch v-model="errorOpen"/></template>
        </cell>
        <cell :arrow="false">
          <template v-slot:title>Toast Center Warn</template>
          <template v-slot:value><vx-switch v-model="warnOpen"/></template>
        </cell>
        <cell :arrow="false">
          <template v-slot:title>Toast Center Loading</template>
          <template v-slot:value><vx-switch v-model="loadingOpen"/></template>
        </cell>
        <cell :arrow="false">
          <template v-slot:title>Toast Bottom</template>
          <template v-slot:value><vx-switch v-model="bottomOpen"/></template>
        </cell>
        <cell :arrow="false">
          <template v-slot:title>js调用</template>
          <template v-slot:value><span @click="handleOpen">点击我打开</span></template>
        </cell>
      </group>
    </vx-page-body>
    <toast v-model:open="topOpen">{{message}}</toast>
    <toast v-model:open="centerOpen" type="success" align="center">{{message}}</toast>
    <toast v-model:open="errorOpen" type="error" align="center">操作失败</toast>
    <toast v-model:open="warnOpen" type="warn" align="center">已经操作过了</toast>
    <toast v-model:open="loadingOpen" type="loading" align="center">Loading</toast>
    <toast v-model:open="bottomOpen" align="bottom">{{message}}</toast>
  </vx-page>
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
