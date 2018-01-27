<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">PopupPicker</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">area picker</div>
          <x-switch slot="value" v-model="pickerChecked"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">address picker</div>
          <x-switch slot="value" v-model="pickerAddressChecked"/>
        </cell>
      </group>
    </x-body>
    <popup-picker
      :open.sync="pickerChecked"
      :pickers="pickers"
      @on-pickerchange="handleChangePicker"
      @on-change="handleConfirm"
      />
    <popup-picker 
      :open.sync="pickerAddressChecked"
      :pickers="addressPickers"
      @on-pickerchange="handleChangeAddressPicker"
      @on-change="handleConfirmAddress"
      />
  </layout>
</template>

<script>
import {
  provinces,
  citys,
  areas
} from './address'

export default {
  methods: {
    handleChangePicker (value) {
      console.log(value)
    },
    handleConfirm (value) {
      console.log(value)
      this.pickerChecked = false
    },
    handleChangeAddressPicker (value, index) {
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
    handleConfirmAddress (value) {
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
