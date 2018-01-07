<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Confirm</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">开关</div>
          <x-switch slot="value" :value="checked" @on-change="changeHandler"/>
        </cell>
      </group>
    </x-body>
    <confirm :open="checked" @on-close="changeHandler" @on-confirm="changeHandler">确认删除？</confirm>
  </layout>
</template>

<script>
import {
  Layout,
  XNav,
  Group,
  Cell,
  XSwitch,
  Confirm
} from 'components'
export default {
  components: {
    Layout,
    XNav,
    Group,
    Cell,
    XSwitch,
    Confirm
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
