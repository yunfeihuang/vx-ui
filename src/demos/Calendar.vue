<template>
  <layout>
    <x-nav slot="header" back="/" title="Calendar"></x-nav>
    <x-body slot="body">
      <group :title="`日期选择器：${value1 && value1.toLocaleDateString ? value1.toLocaleDateString(): value1}`">
        <calendar v-model="value1"/>
      </group>
      <group :title="`日期区间选择器：${value2.map(item => item.toLocaleDateString ? item.toLocaleDateString(): item)}`">
        <calendar v-model="value2" is-range/>
      </group>
      <group :title="`周区间选择器：${value3.map(item => item.toLocaleDateString ? item.toLocaleDateString(): item)}`">
        <calendar v-model="value3" is-range is-week-range/>
      </group>
    </x-body>
  </layout>
</template>

<script>
import { children } from 'utils/mixins/page'
export default {
  mixins: [children],
  data () {
    return {
      value1: null,
      value2: [],
      value3: []
    }
  }
}
</script>
