<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Prompt</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">开关(用户名称：{{value1}})</div>
          <x-switch slot="value" v-model="open1"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">开关(用户密码：{{value2}})</div>
          <x-switch slot="value" v-model="open2"/>
        </cell>
      </group>
    </x-body>
    <prompt
      v-model="value1"
      title="用户名称"
      :open.sync="open1"
      :disabled="disabled1"
      :input-props="{placeholder:'请输入用户名称'}"
      @change="handleChangePrompt1">
    </Prompt>
    <prompt
      v-model="value2"
      title="Wifi密码"
      :open.sync="open2"
      :disabled="disabled2"
      :input-props="{placeholder:'请输入wifi密码',type:'password'}"
      @change="handleChangePrompt2">
    </prompt>
  </layout>
</template>

<script>
export default {
  methods: {
    handleChangePrompt1 (value) {
      if (value && value.trim()) {
        this.disabled1 = false
      } else {
        this.disabled1 = true
      }
    },
    handleChangePrompt2 (value) {
      if (value && value.trim()) {
        this.disabled2 = false
      } else {
        this.disabled2 = true
      }
    }
  },
  data () {
    return {
      value1: '',
      open1: false,
      disabled1: true,
      value2: '',
      open2: false,
      disabled2: true
    }
  }
}
</script>

<style lang="scss">

</style>
