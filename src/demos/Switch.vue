<template>
  <layout>
    <x-header slot="header">
      <div slot="title">XSwitch</div>
    </x-header>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">开关</div>
          <x-switch slot="value" :checked="checked" @on-change="changeHandler"></x-switch>
        </cell>
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
  XSwitch
} from 'components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Group,
    Cell,
    XSwitch
  },
  methods: {
    changeHandler (value) {
      this.checked = value
    }
  },
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style lang="scss">

</style>
