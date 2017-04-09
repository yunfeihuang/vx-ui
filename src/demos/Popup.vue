<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Popup</div>
    </x-header>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">popup default</div>
          <x-switch slot="value" :checked="checked" @on-change="changeHandler"></x-switch>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup full</div>
          <x-switch slot="value" :checked="fullChecked" @on-change="changeFullHandler"></x-switch>
        </cell>
      </group>
    </x-body>
    <popup :open="checked"  @on-close="changeHandler">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup default close</div>
            <x-switch slot="value" :checked="checked" @on-change="changeHandler"></x-switch>
          </cell>
        </group>
      </div>
    </popup>
    <popup :open="fullChecked"  @on-close="changeFullHandler" :full="true">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup full close</div>
            <x-switch slot="value" :checked="fullChecked" @on-change="changeFullHandler"></x-switch>
          </cell>
        </group>
      </div>
    </popup>
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
  Popup
} from 'components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Group,
    Cell,
    XSwitch,
    Popup
  },
  methods: {
    changeHandler (value) {
      this.checked = !this.checked
    },
    changeFullHandler (value) {
      this.fullChecked = !this.fullChecked
    }
  },
  data () {
    return {
      checked: false,
      fullChecked: false
    }
  }
}
</script>

<style lang="scss">

</style>
