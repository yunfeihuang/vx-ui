<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Picker</div>
    </x-header>
    <x-body slot="body">
      <group>
        <picker :value="value" :options="options" @on-change="changePickerHandler"></picker>
      </group>
      <group>
        <div class="address-pickers">
          <picker class="address-picker" :value="value1" :options="options1" @on-change="changePickerHandler1"></picker>
          <picker class="address-picker" :value="value2" :options="options2" @on-change="changePickerHandler2"></picker>
          <picker class="address-picker" :value="value3" :options="options3" @on-change="changePickerHandler3"></picker>
        </div>
      </group>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Picker,
  Group
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
    Picker,
    Group
  },
  methods: {
    changePickerHandler (value) {
      this.value = value
    },
    changePickerHandler1 (value) {
      this.value1 = value
      this.value2 = value + '01'
      this.options2 = citys[value]
      this.value3 = this.value2 + '01'
      this.options3 = areas[this.value2]
    },
    changePickerHandler2 (value) {
      this.value2 = value
      this.value3 = value + '01'
      this.options3 = areas[value]
    },
    changePickerHandler3 (value) {
      this.value3 = value
    }
  },
  data () {
    return {
      options: areas['0101'],
      value: '010101',
      value1: '01',
      options1: provinces,
      value2: '0101',
      options2: citys['01'],
      value3: '010101',
      options3: areas['0101']
    }
  }
}
</script>

<style lang="scss">
  .address-pickers{
    display:flex;
    .address-picker{
      flex:1;
      min-width:0;
    }
  }
</style>
