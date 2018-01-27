<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">DatetimePicker</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">{{pickerValue1}}</div>
          <x-switch slot="value" :value="pickerOpen1" @on-change="handleChange1"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">{{pickerValue2}}</div>
          <x-switch slot="value" :value="pickerOpen2" @on-change="handleChange2"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">{{pickerValue3}}</div>
          <x-switch slot="value" :value="pickerOpen3" @on-change="handleChange3"/>
        </cell>
      </group>
    </x-body>
    <datetime-picker
      format="yyyy-MM-dd"
      :open="pickerOpen1"
      :value="pickerValue1"
      @on-close="handleChange1"
      @on-change="handleConfirm1"
      />
    <datetime-picker
      format="yyyy-MM-dd HH:mm:ss"
      :open="pickerOpen2"
      :value="pickerValue2"
      @on-close="handleChange2"
      @on-change="handleConfirm2"
      />
    <datetime-picker
      format="HH:mm:ss"
      :open="pickerOpen3"
      :value="pickerValue3"
      @on-cancel="handleChange3"
      @on-change="handleConfirm3"
      />
  </layout>
</template>

<script>
export default {
  methods: {
    handleChange1 () {
      this.pickerOpen1 = !this.pickerOpen1
    },
    handleConfirm1 (value) {
      this.pickerOpen1 = false
      this.pickerValue1 = value
    },
    handleChange2 () {
      this.pickerOpen2 = !this.pickerOpen2
    },
    handleConfirm2 (value) {
      this.pickerOpen2 = false
      this.pickerValue2 = value
    },
    handleChange3 () {
      this.pickerOpen3 = !this.pickerOpen3
    },
    handleConfirm3 (value) {
      this.pickerOpen3 = false
      this.pickerValue3 = value
    }
  },
  data () {
    return {
      pickerOpen1: false,
      pickerValue1: '2017-05-29',
      pickerOpen2: false,
      pickerValue2: '2017-05-29 10:10:20',
      pickerOpen3: false,
      pickerValue3: '10:12:20'
    }
  }
}
</script>

<style lang="scss">

</style>
