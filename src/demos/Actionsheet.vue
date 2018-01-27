<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Actionsheet</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">Actionsheet</div>
          <x-switch slot="value" v-model="checked"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">Actionsheet(cancel)</div>
          <x-switch slot="value" v-model="checked1"/>
        </cell>
      </group>
    </x-body>
    <actionsheet :open.sync="checked" @on-click="handleClick">
      <actionsheet-item value="1">编辑</actionsheet-item>
      <actionsheet-item value="2">收藏</actionsheet-item>
      <actionsheet-item value="3">分享</actionsheet-item>
      <actionsheet-item value="4">删除</actionsheet-item>
    </actionsheet>
    <actionsheet :open.sync="checked1" :cancel="true" @on-click="handleClick" >
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
