<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Radio</div>
    </x-header>
    <x-body slot="body">
      <group>
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
  Group
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Radio,
    RadioGroup,
    Group
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
  
</style>
