<template>
  <page>
    <x-nav slot="header" title="Datetime"></x-nav>
    <page-body slot="body">
      <group title="default">
        <datetime v-model="date" placeholder="请输入年月日"/>
      </group>
      <group title="年月">
        <datetime v-model="date2" format="yyyy-MM" placeholder="请输入年月" />
      </group>
      <group title="年份">
        <datetime v-model="date3" format="yyyy" placeholder="请输入年份" />
      </group>
      <group title="时分秒">
        <datetime format="HH:mm:ss" v-model="time" placeholder="请输入时间"/>
      </group>
      <group title="时分">
        <datetime format="HH:mm" v-model="time2" placeholder="请输入时间"/>
      </group>
    </page-body>
  </page>
</template>

<script>
export default {
  data () {
    return {
      date: null,
      date2: null,
      date3: null,
      datetime: null,
      time: null,
      time2: null
    }
  }
}
</script>
