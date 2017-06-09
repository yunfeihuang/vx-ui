<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Checker</div>
    </x-header>
    <x-body slot="body">
      <group title="Checker 多选">
        <div style="padding:20px 10px">
          <Checker :options="options" @on-change="changeCheckboxHandler" :value="checkboxValue"/>
          <br />
          value：{{checkboxValue}}
        </div>
      </group>
      <group title="Checker 单选">
        <div style="padding:20px 10px">
          <Checker type="radio" :options="options" @on-change="changeRadioHandler" :value="radioValue"/>
          <br />
          value：{{radioValue}}
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
  Checker,
  Group
} from 'components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Checker,
    Group
  },
  methods: {
    changeCheckboxHandler (value) {
      this.checkboxValue = value
    },
    changeRadioHandler (value) {
      this.radioValue = value
    }
  },
  data () {
    return {
      checkboxValue: ['1'],
      radioValue: '1',
      options: [
        {
          value: '1',
          label: '篮球'
        },
        {
          value: '2',
          label: '羽毛球'
        },
        {
          value: '3',
          label: '乒乓球',
          disabled: true
        },
        {
          value: '4',
          label: '高尔夫'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  
</style>
