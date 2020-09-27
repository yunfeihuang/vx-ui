<template>
  <page>
    <x-nav slot="header" title="DatetimePicker"></x-nav>
    <page-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">{{pickerValue1}}</div>
          <x-switch slot="value" v-model="pickerOpen1"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">{{pickerValue2}}</div>
          <x-switch slot="value" v-model="pickerOpen2"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">{{pickerValue3}}</div>
          <x-switch slot="value" v-model="pickerOpen3"/>
        </cell>
      </group>
    </page-body>
    <datetime-picker
      format="yyyy-MM-dd"
      :open.sync="pickerOpen1"
      v-model="pickerValue1"
      />
    <datetime-picker
      format="yyyy-MM-dd HH:mm:ss"
      :open.sync="pickerOpen2"
      v-model="pickerValue2"
      />
    <datetime-picker
      format="HH:mm:ss"
      :open.sync="pickerOpen3"
      v-model="pickerValue3"
      />
  </page>
</template>

<script>
export default {
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
