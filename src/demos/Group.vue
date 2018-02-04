<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Group</div>
    </x-nav>
    <x-body slot="body">
      <group title="default">
        <cell :arrow="false">
          <div slot="title">开关（{{checked}}）</div>
          <x-switch slot="value" v-model="checked" />
        </cell>
      </group>
    </x-body>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>
