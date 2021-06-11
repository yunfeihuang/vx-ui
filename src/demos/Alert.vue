<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Alert"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group>
        <vx-cell :arrow="false">
          <template v-slot:title>开关</template>
          <template v-slot:value><vx-switch v-model="open"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>js调用</template>
          <template v-slot:value><span @click="handleOpen">点击我打开</span></template>
        </vx-cell>
      </vx-group>
    </vx-page-body>
    <alert v-model:open="open" title="标题">alert</alert>
  </vx-page>
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
