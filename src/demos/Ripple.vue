<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Ripple</div>
    </x-header>
    <x-body slot="body">
      <group class="ripple-demo">
        <ripple @click="clickHandler">
          点击我会出现波纹
        </ripple>
        <divider></divider>
        <ripple>
          点击我会出现波纹
        </ripple>
        <divider></divider>
        <ripple color="rgba(255,0,0,0.1)">
          点击我会出现波纹
        </ripple>
      </group>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Group,
  Cell,
  Ripple,
  Divider
} from 'components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Group,
    Cell,
    Ripple,
    Divider
  },
  methods: {
    clickHandler (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
  .ripple-demo{
    line-height:44px;
    text-indent:10px;
  }
</style>
