<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Tab</div>
    </x-header>
    <x-body slot="body" style="background:#fff">
      <tab :active="active" @on-change="changeHandler">
        <tab-item>选项卡1</tab-item>
        <tab-item>选项卡2</tab-item>
        <tab-item>选项卡3</tab-item>
        <tab-item>选项卡4</tab-item>
      </tab>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Tab,
  TabItem
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Tab,
    TabItem
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
