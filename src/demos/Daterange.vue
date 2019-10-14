<template>
  <page>
    <x-nav slot="header" back="/" title="Daterange"></x-nav>
    <x-body slot="body">
      <group title="default">
        <daterange v-model="date" placeholder="请输入日期区间"/>
      </group>
    </x-body>
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
