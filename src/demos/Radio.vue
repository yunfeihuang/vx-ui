<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Radio</div>
    </x-header>
    <x-body slot="body">
      <group title="Radio" class="radio-wrapper">
        <radio name="radio1">篮球</radio>
        <divider></divider>
        <radio name="radio1">羽毛球</radio>
      </group>
      <group title="RadioGroup">
        <radio-group :options="options" @on-change="changeHandler" name="radio" :value="value"/>
      </group>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Radio,
  RadioGroup,
  Group,
  Divider
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Radio,
    RadioGroup,
    Group,
    Divider
  },
  methods: {
    changeHandler (value) {
      this.value = value
    }
  },
  data () {
    return {
      value: '1',
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
          label: '乒乓球'
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
  .radio-wrapper{
    label{
      padding-left:0.5rem;
    }
  }
</style>
