<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Search</div>
    </x-header>
    <x-body slot="body"  class="demos img-demos">
      <search :value="value" placeholder="搜索商品/商店/用户" @on-change="changeHandler">
        <div style="text-align:center;line-height:40px;">搜索结果<div>
      </search>
    </x-body>
  </layout>
</template>

<script>
import {
  Search,
  Layout,
  XHeader,
  XBody
} from '../components'
export default {
  components: {
    Search,
    Layout,
    XHeader,
    XBody
  },
  methods: {
    changeHandler (value) {
      this.value = value
    }
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss">

</style>
