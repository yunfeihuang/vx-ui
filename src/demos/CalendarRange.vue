<template>
  <page>
    <x-nav slot="header" back="/" title="CalendarRange"></x-nav>
    <x-body slot="body">
      <group :title="`日期区间选择器：${value.map(item => item.toLocaleDateString ? item.toLocaleDateString(): item)}`">
        <calendar-range v-model="value"/>
      </group>
    </x-body>
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
