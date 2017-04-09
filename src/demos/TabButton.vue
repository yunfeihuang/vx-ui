<template>
  <layout>
    <x-header slot="header">
      <div slot="title">ButtonTab</div>
    </x-header>
    <x-body slot="body" style="padding:15px;background:#fff">
      <button-tab :active="active" @on-change="changeHandler">
        <button-tab-item>选项1</button-tab-item>
        <button-tab-item>选项2</button-tab-item>
        <button-tab-item>选项3</button-tab-item>
        <button-tab-item>选项4</button-tab-item>
      </button-tab>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  ButtonTab,
  ButtonTabItem
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    ButtonTab,
    ButtonTabItem
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
