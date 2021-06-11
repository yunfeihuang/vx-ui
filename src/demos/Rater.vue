<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Rater"></vx-nav>
    </template>
    <vx-page-body class="demos" >
      <vx-group>
        <vx-cell :arrow="false">
          <template v-slot:title>评分({{value}})</template>
          <template v-slot:value><vx-rater v-model="value"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>评分({{value}})</template>
          <template v-slot:value><vx-rater color="red" v-model="value"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>喜欢({{value}})</template>
          <template v-slot:value><vx-rater star="♡" v-model="value"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>喜欢({{value}})</template>
          <template v-slot:value><vx-rater star="♡" color="red" v-model="value"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>滑块控制</template>
          <template v-slot:value><vx-range style="width:4rem" v-model="value" :max="5"/></template>
        </vx-cell>
      </vx-group>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  data () {
    return {
      value: 0
    }
  }
}
</script>

<style lang="scss">

</style>
