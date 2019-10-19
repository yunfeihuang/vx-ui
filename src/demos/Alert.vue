<template>
  <page>
    <x-nav slot="header" title="Alert"></x-nav>
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
    <alert :open.sync="open" title="标题">alert</alert>
  </page>
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
      this.$alert({message: 'alert'}).then(() => {
        console.log('alert')
      })
    }
  }
}
</script>

<style lang="scss">

</style>
