<template>
  <div class="demos">
    <h1>Toast</h1>
    <group>
      <cell :arrow="false">
        <div slot="title">Toast Message Top</div>
        <x-switch slot="value" :checked="topOpen" @on-change="changeTHandler"></x-switch>
      </cell>
      <cell :arrow="false">
        <div slot="title">Toast Message Center Success</div>
        <x-switch slot="value" :checked="centerOpen" @on-change="changeCHandler"></x-switch>
      </cell>
      <cell :arrow="false">
        <div slot="title">Toast Message Bottom</div>
        <x-switch slot="value" :checked="bottomOpen" @on-change="changeBHandler"></x-switch>
      </cell>
    </group>
    <toast :open="topOpen" @on-close="changeTHandler">{{content}}</toast>
    <toast :open="centerOpen" type="success" align="center" @on-close="changeCHandler">{{content}}</toast>
    <toast :open="bottomOpen" align="bottom" @on-close="changeBHandler">{{content}}</toast>
  </div>
</template>

<script>
import {
  Toast,
  XSwitch,
  Group,
  Cell
} from '../components'
export default {
  components: {
    Toast,
    XSwitch,
    Group,
    Cell
  },
  methods: {
    changeTHandler () {
      this.topOpen = !this.topOpen
    },
    changeCHandler () {
      this.centerOpen = !this.centerOpen
    },
    changeBHandler () {
      this.bottomOpen = !this.bottomOpen
    }
  },
  data () {
    return {
      topOpen: false,
      centerOpen: false,
      bottomOpen: false,
      content: '亲，收到我的祝福么？'
    }
  }
}
</script>

<style lang="scss">

</style>
