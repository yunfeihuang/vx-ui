<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Input</div>
    </x-nav>
    <x-body slot="body">
      <group title="default">
        <x-input placeholder="请输入帐号" v-model="value"/>
      </group>
      <group title="disabled">
        <x-input placeholder="请输入帐号" v-model="value" disabled/>
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
