<template>
  <page>
    <x-nav slot="header" title="CalendarRange"></x-nav>
    <page-body slot="body">
      <group :title="`日期区间选择器：${value.map(item => item.toLocaleDateString ? item.toLocaleDateString(): item)}`">
        <calendar-range v-model="value"/>
      </group>
    </page-body>
  </page>
</template>

<script>
export default {
  data () {
    return {
      value: []
    }
  }
}
</script>
