<template>
  <div class="demos img-demos">
    <h1>Search</h1>
    <search :value="value" placeholder="搜索商品/商店/用户" @on-change="changeHandler">
      <div style="text-align:center;line-height:40px;">搜索结果<div>
    </search>
  </div>
</template>

<script>
import {
  Search
} from '../components'
export default {
  components: {
    Search
  },
  methods: {
    changeHandler (value) {
      this.value = value
    }
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss">

</style>
