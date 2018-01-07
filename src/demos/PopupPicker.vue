<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">PopupPicker</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">area picker</div>
          <x-switch slot="value" :value="pickerChecked" @on-change="changePickerOpenHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">address picker</div>
          <x-switch slot="value" :value="pickerAddressChecked" @on-change="changeAddressPickerOpenHandler"/>
        </cell>
      </group>
    </x-body>
    <popup-picker
      :open="pickerChecked"
      :pickers="pickers"
      @on-pickerchange="changePickerHandler"
      @on-close="changePickerOpenHandler"
      @on-change="confirmHandler"
      />
    <popup-picker 
      :open="pickerAddressChecked"
      :pickers="addressPickers"
      @on-pickerchange="changeAddressPickerHandler"
      @on-close="changeAddressPickerOpenHandler"
      @on-change="confirmAddressHandler"
      />
  </layout>
</template>

<script>
import {
  Layout,
  XNav,
  Group,
  Cell,
  XSwitch,
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
    XNav,
    Group,
    Cell,
    XSwitch,
    PopupPicker
  },
  methods: {
    changePickerOpenHandler (value) {
      this.pickerChecked = !this.pickerChecked
    },
    changePickerHandler (value) {
      console.log(value)
    },
    confirmHandler (value) {
      console.log(value)
      this.pickerChecked = false
    },
    changeAddressPickerOpenHandler () {
      this.pickerAddressChecked = !this.pickerAddressChecked
    },
    changeAddressPickerHandler (value, index) {
      if (index === 0) {
        this.addressPickers[1].options = citys[value]
        this.addressPickers[1].value = citys[value][0].value
        this.addressPickers[2].options = areas[this.addressPickers[1].value]
        this.addressPickers[2].value = areas[this.addressPickers[1].value][0].value
      }
      if (index === 1) {
        this.addressPickers[2].options = areas[value]
        this.addressPickers[2].value = areas[value][0].value
      }
    },
    confirmAddressHandler (value) {
      this.pickerAddressChecked = false
      console.log(value)
    }
  },
  data () {
    return {
      pickerChecked: false,
      pickers: [
        {
          value: '010101',
          options: areas['0101']
        }
      ],
      pickerAddressChecked: false,
      addressPickers: [
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
