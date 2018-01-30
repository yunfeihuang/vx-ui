<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Picker</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <picker placeholder="请选择" v-model="value" :options="options"></picker>
      </group>
    </x-body>
  </layout>
</template>

<script>
import {
  areas
} from './address'

export default {
  data () {
    return {
      options: areas['0101'],
      value: '010101'
    }
  }
}
</script>

<style lang="scss">
  
</style>
