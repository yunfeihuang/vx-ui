<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Actionsheet</div>
    </x-header>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">Actionsheet</div>
          <x-switch slot="value" :value="checked" @on-change="changeHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Actionsheet(cancel)</div>
          <x-switch slot="value" :value="checked1" @on-change="changeHandler1"/>
        </cell>
      </group>
    </x-body>
    <actionsheet :open="checked" @on-click="clickHandler" @on-close="changeHandler">
      <actionsheet-item value="1">编辑</actionsheet-item>
      <actionsheet-item value="2">收藏</actionsheet-item>
      <actionsheet-item value="3">分享</actionsheet-item>
      <actionsheet-item value="4">删除</actionsheet-item>
    </actionsheet>
    <actionsheet :open="checked1" :cancel="true" @on-click="clickHandler" @on-close="changeHandler1">
      <actionsheet-item value="1">编辑</actionsheet-item>
      <actionsheet-item value="2">收藏</actionsheet-item>
      <actionsheet-item value="3">分享</actionsheet-item>
      <actionsheet-item value="4">删除</actionsheet-item>
    </actionsheet>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Group,
  Cell,
  XSwitch,
  Actionsheet,
  ActionsheetItem
} from 'components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Group,
    Cell,
    XSwitch,
    Actionsheet,
    ActionsheetItem
  },
  methods: {
    changeHandler (value) {
      this.checked = !this.checked
    },
    changeHandler1 (value) {
      this.checked1 = !this.checked1
    },
    clickHandler (value) {
      console.log('clickHandler')
      // this.checked = false
    }
  },
  data () {
    return {
      checked: false,
      checked1: false
    }
  }
}
</script>

<style lang="scss">

</style>
