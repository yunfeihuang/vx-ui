<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Popup</div>
    </x-header>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">popup default</div>
          <x-switch slot="value" :value="checked" @on-change="changeHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup full</div>
          <x-switch slot="value" :value="fullChecked" @on-change="changeFullHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup picker</div>
          <x-switch slot="value" :value="pickerChecked" @on-change="changePickerOpenHandler"/>
        </cell>
      </group>
    </x-body>
    <popup :open="checked" @on-close="changeHandler">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup default close</div>
            <x-switch slot="value" :value="checked" @on-change="changeHandler"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup :open="fullChecked"  @on-close="changeFullHandler" :full="true">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup full close</div>
            <x-switch slot="value" :value="fullChecked" @on-change="changeFullHandler"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup-picker :open="pickerChecked" :pickers="pickers" @on-change="changePickerHandler" @on-cancel="changePickerOpenHandler" @on-confirm="confirmHandler"/>
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
  Popup,
  Picker,
  PopupPicker
} from 'components'

import {
  provinces,
  citys,
  areas
} from './address'

export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Group,
    Cell,
    XSwitch,
    Popup,
    Picker,
    PopupPicker
  },
  methods: {
    changeHandler (value) {
      this.checked = !this.checked
    },
    changeFullHandler (value) {
      this.fullChecked = !this.fullChecked
    },
    changePickerOpenHandler (value) {
      this.pickerChecked = !this.pickerChecked
    },
    changePickerHandler (value, index) {
      if (index === 0) {
        this.pickers[1].options = citys[value]
        this.pickers[1].value = citys[value][0].value
        this.pickers[2].options = areas[this.pickers[1].value]
        this.pickers[2].value = areas[this.pickers[1].value][0].value
      }
      if (index === 1) {
        this.pickers[2].options = areas[value]
        this.pickers[2].value = areas[value][0].value
      }
    },
    confirmHandler (value) {
      this.pickerChecked = false
      console.log(value)
    }
  },
  data () {
    return {
      checked: false,
      fullChecked: false,
      pickerChecked: false,
      pickers: [
        {
          value: '01',
          options: provinces
        },
        {
          value: '0101',
          options: citys['01']
        },
        {
          value: '010101',
          options: areas['0101']
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
