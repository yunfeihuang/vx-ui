<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Cell</div>
    </x-nav>
    <x-body slot="body">
      <group title="default">
        <cell title="标题">
          <icon slot="icon">&#xe63b;</icon>
          <x-switch slot="value" v-model="checked" />
        </cell>
      </group>
      <group title="no arrow">
        <cell :arrow="false" title="标题">
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
