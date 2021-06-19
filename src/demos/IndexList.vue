<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="IndexList"></vx-nav>
    </template>
    <vx-index-list  :data="list" @choose="handleChoose"/>
  </vx-page>
</template>
<script>
export default {
  data () {
    let list = []
    let array = ['★', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L']
    array.forEach(item1 => {
      let options = array.map(item2 => {
        return {
          value: item1 + item2,
          label: `label-${item1 + item2}`
        }
      })
      list.push({
        label: item1,
        options
      })
    })
    return {
      list
    }
  },
  methods: {
    handleChoose (value) {
      this.$toast({
        message: `点击了"${value.value}"`
      })
    }
  }
}
</script>
