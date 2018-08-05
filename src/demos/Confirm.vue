<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Confirm</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">开关</div>
          <x-switch slot="value" v-model="open1"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">长内容</div>
          <x-switch slot="value" v-model="open2"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">js调用</div>
          <span slot="value" @click="handleOpen">点击我打开</span>
        </cell>
      </group>
    </x-body>
    <confirm :open.sync="open1">确认删除？</confirm>
    <confirm :open.sync="open2">
      <div style="line-height:3;">
        长内容长内容长内容长内容长内容长内容长长内容长内容长内容长内容长内容长
        内容长内容长内容长内容长内容长内容长内容长内容长内容长内容内容长内容长内
        容长内容长内容长内容长内容长内容长内容
        长内容长内容长内容长内容长内容长内容长长内容长内容长内容长内容长内容长
        内容长内容长内容长内容长内容长内容长内容长内容长内容长内容内容长内容长内
        容长内容长内容长内容长内容长内容长内容
        长内容长内容长内容长内容长内容长内容长长内容长内容长内容长内容长内容长
        内容长内容长内容长内容长内容长内容长内容长内容长内容长内容内容长内容长内
        容长内容长内容长内容长内容长内容长内容
      </div>
    </confirm>
  </layout>
</template>

<script>
import { children } from 'utils/mixins/page'
export default {
  mixins: [children],
  data () {
    return {
      open1: false,
      open2: false
    }
  },
  methods: {
    handleOpen () {
      this.$confirm({message: '确认删除？'}).then(() => {
        console.log('confirm')
      }).catch(() => {
        console.log('cancel')
      })
    }
  }
}
</script>
