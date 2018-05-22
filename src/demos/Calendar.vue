<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Calendar</div>
    </x-nav>
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
export default {
  data () {
    return {
      value1: null,
      value2: [],
      value3: []
    }
  }
}
</script>
