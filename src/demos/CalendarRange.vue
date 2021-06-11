<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="CalendarRange"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group :title="`日期区间选择器：${value.map(item => item.toLocaleDateString ? item.toLocaleDateString(): item)}`">
        <calendar-range v-model="value"/>
      </vx-group>
    </vx-page-body>
  </vx-page>
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
