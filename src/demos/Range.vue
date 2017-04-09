<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Range</div>
    </x-header>
    <x-body slot="body">
      <group>
        <div style="padding:10px;">
          <range :value="value" :min="min" :step="step" @on-change="changeHandler"></range>
        </div>
      </group>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Range,
  Group
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Range,
    Group
  },
  methods: {
    changeHandler (value) {
      this.value = value
    }
  },
  data () {
    return {
      min: 10,
      value: 20,
      step: 1
    }
  }
}
</script>

<style lang="scss">

</style>
