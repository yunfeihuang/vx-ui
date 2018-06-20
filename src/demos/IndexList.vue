<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">IndexList</div>
    </x-nav>
    <index-list slot="body" :data="list" @click="handleClick"/>
  </layout>
</template>
<script>
import { children } from 'utils/mixins/page'
export default {
  mixins: [children],
  data () {
    let list = []
    let array = ['★', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L']
    array.forEach(item1 => {
      let items = array.map(item2 => {
        return {
          value: item1 + item2,
          label: `label-${item1 + item2}`
        }
      })
      list.push({
        label: item1,
        items
      })
    })
    return {
      list
    }
  },
  methods: {
    handleClick (value) {
      this.$toast({
        content: `点击了"${value}"`
      })
    }
  }
}
</script>
