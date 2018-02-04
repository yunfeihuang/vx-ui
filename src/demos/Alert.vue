<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Alert</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">开关</div>
          <x-switch slot="value" v-model="open"/>
        </cell>
      </group>
    </x-body>
    <alert :open.sync="open">确认删除？</alert>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss">

</style>
