<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Actionsheet</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">Actionsheet</div>
          <x-switch slot="value" :value="checked" @on-change="handleChange"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Actionsheet(cancel)</div>
          <x-switch slot="value" :value="checked1" @on-change="handleChange1"/>
        </cell>
      </group>
    </x-body>
    <actionsheet :open="checked" @on-click="handleClick" @on-close="handleChange">
      <actionsheet-item value="1">编辑</actionsheet-item>
      <actionsheet-item value="2">收藏</actionsheet-item>
      <actionsheet-item value="3">分享</actionsheet-item>
      <actionsheet-item value="4">删除</actionsheet-item>
    </actionsheet>
    <actionsheet :open="checked1" :cancel="true" @on-click="handleClick" @on-close="handleChange1">
      <actionsheet-item value="1">编辑</actionsheet-item>
      <actionsheet-item value="2">收藏</actionsheet-item>
      <actionsheet-item value="3">分享</actionsheet-item>
      <actionsheet-item value="4">删除</actionsheet-item>
    </actionsheet>
  </layout>
</template>

<script>

export default {
  methods: {
    handleChange (value) {
      this.checked = !this.checked
    },
    handleChange1 (value) {
      this.checked1 = !this.checked1
    },
    handleClick (value) {
      console.log('handleClick')
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
