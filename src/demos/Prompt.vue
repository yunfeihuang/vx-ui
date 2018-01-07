<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Prompt</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">开关(用户名称：{{value1}})</div>
          <x-switch slot="value" :value="checked1" @on-change="changeHandler1"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">开关(用户密码：{{value2}})</div>
          <x-switch slot="value" :value="checked2" @on-change="changeHandler2"/>
        </cell>
      </group>
    </x-body>
    <Prompt
      v-model="value1"
      title="用户名称"
      :open="checked1"
      :disabled="disabled1"
      :input="{placeholder:'请输入用户名称'}"
      @on-close="changeHandler1"
      @on-confirm="changeHandler1"
      @on-change="changePromptHandler1">
    </Prompt>
    <Prompt
      v-model="value2"
      title="Wifi密码"
      :open="checked2"
      :disabled="disabled2"
      :input="{placeholder:'请输入wifi密码',type:'password'}"
      @on-close="changeHandler2"
      @on-confirm="changeHandler2"
      @on-change="changePromptHandler2">
    </Prompt>
  </layout>
</template>

<script>
import {
  Layout,
  XNav,
  Group,
  Cell,
  XSwitch,
  Prompt
} from 'components'
export default {
  components: {
    Layout,
    XNav,
    Group,
    Cell,
    XSwitch,
    Prompt
  },
  methods: {
    changeHandler1 (value) {
      this.checked1 = !this.checked1
    },
    changePromptHandler1 (value) {
      if (value && value.trim()) {
        this.disabled1 = false
      } else {
        this.disabled1 = true
      }
    },
    changeHandler2 (value) {
      this.checked2 = !this.checked2
    },
    changePromptHandler2 (value) {
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
      checked1: false,
      disabled1: true,
      value2: '',
      checked2: false,
      disabled2: true
    }
  }
}
</script>

<style lang="scss">

</style>
