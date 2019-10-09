<template>
  <layout>
    <x-nav slot="header" back="/" title="Palace"></x-nav>
    <x-body slot="body">
      <palace>
        <palace-item v-for="item in 10" :key="item" :column="3">
          <strong>{{item}}</strong> <br />
          dafda
        </palace-item>
      </palace>
    </x-body>
  </layout>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.count++
    }
  },
  data () {
    return {
      count: 8
    }
  }
}
</script>

<style lang="scss">

</style>
