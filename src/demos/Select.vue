<template>
  <layout>
    <x-header slot="header">
      <div slot="title">XSelect</div>
    </x-header>
    <x-body slot="body">
      <group>
        <cell>
          <div slot="title">下拉框</div>
          <x-select 
            slot="value"
            :options="options"
            :value="value"
            placeholder="请选择"
            @on-change="changeHandler"
          />
        </cell>
      </group>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Group,
  Cell,
  XSelect
} from 'components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Group,
    Cell,
    XSelect
  },
  methods: {
    changeHandler (value) {
      this.value = value
    }
  },
  data () {
    return {
      value: '',
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
