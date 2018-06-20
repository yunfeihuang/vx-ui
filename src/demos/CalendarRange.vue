<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">CalendarRange</div>
    </x-nav>
    <x-body slot="body">
      <group :title="`日期区间选择器：${value.map(item => item.toLocaleDateString ? item.toLocaleDateString(): item)}`">
        <calendar-range v-model="value"/>
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
      value: []
    }
  }
}
</script>
