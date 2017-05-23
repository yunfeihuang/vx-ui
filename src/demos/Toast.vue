<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Toast</div>
    </x-header>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">Toast Message Top</div>
          <x-switch slot="value" :value="topOpen" @on-change="changeTHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Message Center Success</div>
          <x-switch slot="value" :value="centerOpen" @on-change="changeCHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Toast Message Bottom</div>
          <x-switch slot="value" :value="bottomOpen" @on-change="changeBHandler"/>
        </cell>
      </group>
    </x-body>
    <toast :open="topOpen" @on-close="changeTHandler">{{content}}</toast>
    <toast :open="centerOpen" type="success" align="center" @on-close="changeCHandler">{{content}}</toast>
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
    changeBHandler () {
      this.bottomOpen = !this.bottomOpen
    }
  },
  data () {
    return {
      topOpen: false,
      centerOpen: false,
      bottomOpen: false,
      content: '亲，收到我的祝福么？'
    }
  }
}
</script>

<style lang="scss">

</style>
