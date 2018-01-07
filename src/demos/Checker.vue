<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Checker</div>
    </x-nav>
    <x-body slot="body">
      <group title="Checker 多选">
        <div style="padding:20px 10px">
          <Checker :label.sync="label1" :options="options" @on-change="changeCheckboxHandler" :value="checkboxValue"/>
          <br />
          value：{{checkboxValue}} label: {{label1}}
        </div>
      </group>
      <group title="Checker 最多选2个">
        <div style="padding:20px 10px">
          <Checker :label.sync="label2" :checked-max-item="2" :options="options" @on-change="changeRadioHandler" :value="radioValue"/>
          <br />
          value：{{radioValue}} label: {{label2}}
        </div>
      </group>
      <group title="Checker 单选">
        <div style="padding:20px 10px">
          <Checker :label.sync="label2" :checked-max-item="1" :options="options" @on-change="changeRadioHandler" :value="radioValue"/>
          <br />
          value：{{radioValue}} label: {{label2}}
        </div>
      </group>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XNav,
  Checker,
  Group
} from 'components'
export default {
  components: {
    Layout,
    XNav,
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
      label1: [],
      label2: '',
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
