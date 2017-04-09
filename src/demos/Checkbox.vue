<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Checkbox</div>
    </x-header>
    <x-body slot="body">
      <group title="Checkbox">
        <checkbox :checked="checked" style="padding:0.8rem 0.5rem" @on-change="checkedHandler">{{checked}}</checkbox>
      </group>
      <group title="CheckboxGroup">
        <checkbox-group :options="options" @on-change="changeHandler" name="checkbox" :value="value"/>
      </group>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Checkbox,
  CheckboxGroup,
  Group
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Checkbox,
    CheckboxGroup,
    Group
  },
  methods: {
    changeHandler (value) {
      this.value = value
    },
    checkedHandler (e) {
      this.checked = e.target.checked
    }
  },
  data () {
    return {
      checked: false,
      value: ['1'],
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
