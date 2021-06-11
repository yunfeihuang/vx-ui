<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Daterange"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group title="default">
        <daterange v-model="date" placeholder="请输入日期区间"/>
      </vx-group>
    </vx-page-body>
  </vx-page>
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
