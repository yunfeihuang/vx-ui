<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="DatetimePicker"></vx-nav>
    </template>
    <vx-page-body>
      <vx-message type="warning">注意：此示例要在移动设备体验哦~</vx-message>
      <vx-group>
        <vx-cell :arrow="false">
          <template v-slot:title>{{pickerValue1}}</template>
          <template v-slot:value><vx-switch v-model="pickerOpen1"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>{{pickerValue2}}</template>
          <template v-slot:value><vx-switch v-model="pickerOpen2"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>{{pickerValue3}}</template>
          <template v-slot:value><vx-switch v-model="pickerOpen3"/></template>
        </vx-cell>
      </vx-group>
    </vx-page-body>
    <vx-datetime-picker
      format="yyyy-MM-dd"
      v-model:open="pickerOpen1"
      v-model="pickerValue1"
      />
    <vx-datetime-picker
      format="yyyy-MM-dd HH:mm:ss"
      v-model:open="pickerOpen2"
      v-model="pickerValue2"
      />
    <vx-datetime-picker
      format="HH:mm:ss"
      v-model:open="pickerOpen3"
      v-model="pickerValue3"
      />
  </vx-page>
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
