<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Prompt"></vx-nav>
    </template>
    <vx-page-body>
      <group>
        <cell :arrow="false">
          <template v-slot:title>开关(用户名称：{{value1}})</template>
          <template v-slot:value><vx-switch v-model="open1"/></template>
        </cell>
        <cell :arrow="false">
          <template v-slot:title>开关(用户密码：{{value2}})</template>
          <template v-slot:value><vx-switch v-model="open2"/></template>
        </cell>
        <cell :arrow="false">
          <template v-slot:title>js调用</template>
          <template v-slot:value><span @click="handleOpen">点击我打开</span></template>
        </cell>
      </group>
      密码加密文本：{{cipher}}
    </vx-page-body>
    <prompt
      v-model="value1"
      title="用户名称"
      v-model:open="open1"
      :disabled="disabled1"
      :input-props="{placeholder:'请输入用户名称'}"
      @change="handleChangePrompt1">
    </Prompt>
    <prompt
      v-model="value2"
      title="Wifi密码"
      v-model:open="open2"
      :disabled="disabled2"
      :input-props="{placeholder:'请输入wifi密码',type:'password'}"
      v-model:cipher="cipher"
      @change="handleChangePrompt2">
    </prompt>
  </vx-page>
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
    },
    handleOpen () {
      this.$prompt({title: '用户名称', inputProps: {placeholder: '请输入用户名称'}}).then((value) => {
        console.log('prompt', value)
      }).catch(() => {
        console.log('cancel')
      })
    }
  },
  data () {
    return {
      value1: '',
      open1: false,
      disabled1: true,
      value2: '',
      open2: false,
      disabled2: true,
      cipher: ''
    }
  }
}
</script>

<style lang="scss">

</style>
