<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Picker</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <picker placeholder="请选择" :value="value" :options="options" @on-change="handleChangePicker"></picker>
      </group>
      <!--
      <group>
        <flexbox>
          <flexbox-item>
            <picker :value="value1" :options="options1" @on-change="handleChangePicker1"></picker>
          </flexbox-item>
          <flexbox-item>
            <picker :value="value2" :options="options2" @on-change="handleChangePicker2"></picker>
          </flexbox-item>
          <flexbox-item>
            <picker :value="value3" :options="options3" @on-change="handleChangePicker3"></picker>
          </flexbox-item>
        </flexbox>
      </group>
      -->
    </x-body>
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
      this.value = value
    },
    handleChangePicker1 (value) {
      this.value1 = value
      this.value2 = value + '01'
      this.options2 = citys[value]
      this.value3 = this.value2 + '01'
      this.options3 = areas[this.value2]
    },
    handleChangePicker2 (value) {
      this.value2 = value
      this.value3 = value + '01'
      this.options3 = areas[value]
    },
    handleChangePicker3 (value) {
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
  
</style>
