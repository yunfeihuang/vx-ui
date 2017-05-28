<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Picker</div>
    </x-header>
    <x-body slot="body">
      <!--
      <picker :value="value" :options="options" @on-change="pickerChangeHandler"></picker>
      -->
      <div class="address-pickers">
        <picker class="address-picker" :value="value1" :options="options1" @on-change="pickerChangeHandler1"></picker>
        <picker class="address-picker" :value="value2" :options="options2" @on-change="pickerChangeHandler2"></picker>
        <picker class="address-picker" :value="value3" :options="options3" @on-change="pickerChangeHandler3"></picker>
      </div>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Picker
} from 'components'

import {
  provinces,
  citys,
  areas
} from './address'

let options = []
for (let i = 0; i < 50; i++) {
  options.push({
    label: 'picker-item' + i,
    value: 'picker-item' + i
  })
}

export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Picker
  },
  methods: {
    changeHandler (value) {
      this.checked = !this.checked
    },
    changeFullHandler (value) {
      this.fullChecked = !this.fullChecked
    },
    pickerChangeHandler (value) {
      this.value = value
    },
    pickerChangeHandler1 (value) {
      this.value1 = value
      this.value2 = value + '01'
      this.options2 = citys[value]
      this.value3 = this.value2 + '01'
      this.options3 = areas[this.value2]
    },
    pickerChangeHandler2 (value) {
      this.value2 = value
      this.value3 = value + '01'
      this.options3 = areas[value]
    },
    pickerChangeHandler3 (value) {
      this.value3 = value
    }
  },
  data () {
    return {
      checked: false,
      fullChecked: false,
      options: options,
      value: 'picker-item1',
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
    }
  }
</style>
