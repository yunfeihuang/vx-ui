<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Confirm</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">开关</div>
          <x-switch slot="value" v-model="open"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">js调用</div>
          <span slot="value" @click="handleOpen">点击我打开</span>
        </cell>
      </group>
    </x-body>
    <confirm :open.sync="open">确认删除？</confirm>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    handleOpen () {
      this.$confirm({content: '确认删除？'}).then(() => {
        console.log('confirm')
      }).catch(() => {
        console.log('cancel')
      })
    }
  }
}
</script>
