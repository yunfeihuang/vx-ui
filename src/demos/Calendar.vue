<template>
  <page>
    <x-nav slot="header" title="Calendar"></x-nav>
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
      <group :title="`国际标准日期选择器：${value1 && value1.toLocaleDateString ? value1.toLocaleDateString(): value1}`">
        <calendar lang="EN" v-model="value1"/>
      </group>
    </x-body>
  </page>
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
