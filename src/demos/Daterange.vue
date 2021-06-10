<template>
  <page>
    <x-nav slot="header" title="Daterange"></x-nav>
    <page-body slot="body">
      <group title="default">
        <daterange v-model="date" placeholder="请输入日期区间"/>
      </group>
    </page-body>
  </page>
</template>

<script>
export default {
  data () {
    return {
      date: []
    }
  }
}
</script>
