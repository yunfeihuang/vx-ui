<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">XSwitch</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">开关（{{checked}}）</div>
          <x-switch slot="value" :value="checked" @on-change="changeHandler" />
        </cell>
      </group>
    </x-body>
  </layout>
</template>

<script>
export default {
  methods: {
    changeHandler (value) {
      this.checked = value
    }
  },
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style lang="scss">

</style>
