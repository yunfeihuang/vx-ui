<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Daterange</div>
    </x-nav>
    <x-body slot="body">
      <group title="default">
        <daterange v-model="date" placeholder="请输入日期区间"/>
      </group>
    </x-body>
  </layout>
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
