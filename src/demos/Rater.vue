<template>
  <layout>
    <x-nav slot="header">
      <div slot="title" >Rater</div>
    </x-nav>
    <x-body class="demos" slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">评分({{value}})</div>
          <rater slot="value" :value="value" @on-change="changeHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">评分({{value}})</div>
          <rater slot="value" color="rgb(255, 204, 102)" :value="value" @on-change="changeHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">喜欢({{value}})</div>
          <rater slot="value" star="♡" :value="value" @on-change="changeHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">喜欢({{value}})</div>
          <rater slot="value" star="♡" color="rgb(255, 204, 102)" :value="value" @on-change="changeHandler"/>
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
import {
  Layout,
  XNav,
  Group,
  Cell,
  Range,
  Rater
} from 'components'
export default {
  components: {
    Layout,
    XNav,
    Group,
    Cell,
    Range,
    Rater
  },
  methods: {
    changeHandler (value) {
      console.log(value)
      this.value = value
    }
  },
  data () {
    return {
      value: 0
    }
  }
}
</script>

<style lang="scss">

</style>
