<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Alert</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">开关</div>
          <x-switch slot="value" :value="checked" @on-change="changeHandler"/>
        </cell>
      </group>
    </x-body>
    <alert :open="checked" @on-confirm="changeHandler" @on-close="changeHandler">确认删除？</alert>
  </layout>
</template>

<script>
import {
  Layout,
  XNav,
  Group,
  Cell,
  XSwitch,
  Alert
} from 'components'
export default {
  components: {
    Layout,
    XNav,
    Group,
    Cell,
    XSwitch,
    Alert
  },
  methods: {
    changeHandler (value) {
      this.checked = !this.checked
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
