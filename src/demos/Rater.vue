<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title" >Rater</div>
    </x-nav>
    <x-body class="demos" slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">评分({{value}})</div>
          <rater slot="value" v-model="value"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">评分({{value}})</div>
          <rater slot="value" color="rgb(255, 204, 102)" v-model="value"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">喜欢({{value}})</div>
          <rater slot="value" star="♡" v-model="value"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">喜欢({{value}})</div>
          <rater slot="value" star="♡" color="rgb(255, 204, 102)" v-model="value"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">滑块控制</div>
          <range style="width:200px" slot="value" v-model="value" :max="5"/>
        </cell>
      </group>
    </x-body>
  </layout>
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
