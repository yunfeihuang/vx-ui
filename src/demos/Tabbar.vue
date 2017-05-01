<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Tabbar</div>
    </x-header>
    <x-body slot="body" style="text-align:center;line-height:40px">
      <div v-if="active===0">我是主页</div>
      <div v-if="active===1">消息在这</div>
      <div v-if="active===2">这里我的</div>
    </x-body>
    <tabbar slot="footer" @on-change="changeHandler" :active="active">
      <tabbar-item text="主页" icon="&#xe651;"/>
      <tabbar-item text="消息" icon="&#xe653;"/>
      <tabbar-item text="我的" icon="&#xe63b;"/>
    </tabbar>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Tabbar,
  TabbarItem
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Tabbar,
    TabbarItem
  },
  methods: {
    changeHandler (value) {
      this.active = value
    }
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">
  
</style>
