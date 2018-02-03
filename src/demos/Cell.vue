<template>
  <layout>
    <x-nav slot="header" :back="{path:'/'}">
      <div slot="title">Cell</div>
    </x-nav>
    <x-body slot="body">
      <group title="default">
        <cell title="开关">
          <x-switch slot="value" v-model="checked" />
        </cell>
      </group>
      <group title="no arrow">
        <cell :arrow="false" title="开关">
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
