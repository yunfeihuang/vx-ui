<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">DatetimePicker</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">{{pickerValue1}}</div>
          <x-switch slot="value" :value="pickerOpen1" @on-change="changeHandler1"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">{{pickerValue2}}</div>
          <x-switch slot="value" :value="pickerOpen2" @on-change="changeHandler2"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">{{pickerValue3}}</div>
          <x-switch slot="value" :value="pickerOpen3" @on-change="changeHandler3"/>
        </cell>
      </group>
    </x-body>
    <datetime-picker
      format="yyyy-MM-dd"
      :open="pickerOpen1"
      :value="pickerValue1"
      @on-close="changeHandler1"
      @on-change="confirmHandler1"
      />
    <datetime-picker
      format="yyyy-MM-dd HH:mm:ss"
      :open="pickerOpen2"
      :value="pickerValue2"
      @on-close="changeHandler2"
      @on-change="confirmHandler2"
      />
    <datetime-picker
      format="HH:mm:ss"
      :open="pickerOpen3"
      :value="pickerValue3"
      @on-cancel="changeHandler3"
      @on-change="confirmHandler3"
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
  Popup,
  Picker,
  PopupPicker,
  DatetimePicker
} from 'components'

export default {
  components: {
    Layout,
    XNav,
    Group,
    Cell,
    XSwitch,
    Popup,
    Picker,
    PopupPicker,
    DatetimePicker
  },
  methods: {
    changeHandler1 () {
      this.pickerOpen1 = !this.pickerOpen1
    },
    confirmHandler1 (value) {
      this.pickerOpen1 = false
      this.pickerValue1 = value
    },
    changeHandler2 () {
      this.pickerOpen2 = !this.pickerOpen2
    },
    confirmHandler2 (value) {
      this.pickerOpen2 = false
      this.pickerValue2 = value
    },
    changeHandler3 () {
      this.pickerOpen3 = !this.pickerOpen3
    },
    confirmHandler3 (value) {
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
