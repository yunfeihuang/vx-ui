<template>
  <page>
    <x-nav slot="header" title="Rater"></x-nav>
    <page-body class="demos" slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">评分({{value}})</div>
          <rater slot="value" v-model="value"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">评分({{value}})</div>
          <rater slot="value" color="red" v-model="value"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">喜欢({{value}})</div>
          <rater slot="value" star="♡" v-model="value"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">喜欢({{value}})</div>
          <rater slot="value" star="♡" color="red" v-model="value"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">滑块控制</div>
          <range style="width:4rem" slot="value" v-model="value" :max="5"/>
        </cell>
      </group>
    </page-body>
  </page>
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
