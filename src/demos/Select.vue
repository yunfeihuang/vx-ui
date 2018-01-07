<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">XSelect</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell>
          <div slot="title">下拉框({{label}})</div>
          <x-select 
            :label.sync="label"
            slot="value"
            :options="options.slice(0,4)"
            :value="value"
            placeholder="请选择"
            @on-change="changeHandler"
          />
        </cell>
        <cell>
          <div slot="title">下拉框(选项很多)</div>
          <x-select 
            slot="value"
            :options="options"
            :value="value2"
            placeholder="请选择"
            @on-change="changeHandler2"
          />
        </cell>
      </group>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XNav,
  Group,
  Cell,
  XSelect
} from 'components'
export default {
  components: {
    Layout,
    XNav,
    Group,
    Cell,
    XSelect
  },
  methods: {
    changeHandler (value) {
      this.value = value
    },
    changeHandler2 (value) {
      this.value2 = value
    }
  },
  data () {
    return {
      label: '',
      value: '',
      value2: '',
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
          label: '高尔夫',
          disabled: true
        },
        {
          value: '5',
          label: '篮球'
        },
        {
          value: '6',
          label: '羽毛球'
        },
        {
          value: '7',
          label: '乒乓球'
        },
        {
          value: '8',
          label: '篮球'
        },
        {
          value: '9',
          label: '羽毛球'
        },
        {
          value: '10',
          label: '乒乓球'
        },
        {
          value: '11',
          label: '高尔夫'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
