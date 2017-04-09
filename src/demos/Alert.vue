<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Alert</div>
    </x-header>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">开关</div>
          <x-switch slot="value" :checked="checked" @on-change="changeHandler"></x-switch>
        </cell>
      </group>
    </x-body>
    <alert :open="checked" @on-confirm="changeHandler">确认删除？</alert>
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
  Alert
} from 'components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
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
