<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Toast</div>
    </x-header>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">Toast Top</div>
          <x-switch slot="value" :value="topOpen" @on-change="changeTHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Center Success</div>
          <x-switch slot="value" :value="centerOpen" @on-change="changeCHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Center Fail</div>
          <x-switch slot="value" :value="failOpen" @on-change="changeFHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Center Warn</div>
          <x-switch slot="value" :value="warnOpen" @on-change="changeWHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Center Loading</div>
          <x-switch slot="value" :value="loadingOpen" @on-change="changeLHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Bottom</div>
          <x-switch slot="value" :value="bottomOpen" @on-change="changeBHandler"/>
        </cell>
      </group>
    </x-body>
    <toast :open="topOpen" @on-close="changeTHandler">{{content}}</toast>
    <toast :open="centerOpen" type="success" align="center" @on-close="changeCHandler">{{content}}</toast>
    <toast :open="failOpen" type="fail" align="center" @on-close="changeFHandler">操作失败</toast>
    <toast :open="warnOpen" type="warn" align="center" @on-close="changeWHandler">已经操作过了</toast>
    <toast :open="loadingOpen" type="loading" align="center" @on-close="changeLHandler">Loading</toast>
    <toast :open="bottomOpen" align="bottom" @on-close="changeBHandler">{{content}}</toast>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Toast,
  XSwitch,
  Group,
  Cell
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Toast,
    XSwitch,
    Group,
    Cell
  },
  methods: {
    changeTHandler () {
      this.topOpen = !this.topOpen
    },
    changeCHandler () {
      this.centerOpen = !this.centerOpen
    },
    changeLHandler () {
      this.loadingOpen = !this.loadingOpen
    },
    changeBHandler () {
      this.bottomOpen = !this.bottomOpen
    },
    changeFHandler () {
      this.failOpen = !this.failOpen
    },
    changeWHandler () {
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
