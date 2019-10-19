<template>
  <page>
    <x-nav slot="header" title="IndexList"></x-nav>
    <index-list slot="body" :data="list" @click="handleClick"/>
  </page>
</template>
<script>
export default {
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
        message: `点击了"${value}"`
      })
    }
  }
}
</script>
