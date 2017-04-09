<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Actionsheet</div>
    </x-header>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">开关</div>
          <x-switch slot="value" :checked="checked" @on-change="changeHandler"></x-switch>
        </cell>
      </group>
    </x-body>
    <actionsheet :open="checked" :cancel="true" @on-menu="menuHandler" @on-close="changeHandler">
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
    menuCloseHandler () {
      console.log('menuCloseHandler')
      this.checked = false
    },
    menuHandler (value) {
      console.log('menuHandler')
      // this.checked = false
    }
  },
  data () {
    return {
      checked: false
    }
  }
}
</script>

<style lang="scss">

</style>
