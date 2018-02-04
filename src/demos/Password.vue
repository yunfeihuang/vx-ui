<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Password</div>
    </x-nav>
    <x-body slot="body">
      <group title="default">
        <password placeholder="请输入密码" v-model="value"/>
      </group>
      <group title="初始明文">
        <password placeholder="请输入密码" v-model="value" native-type="text"/>
      </group>
    </x-body>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
