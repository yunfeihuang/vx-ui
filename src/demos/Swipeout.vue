<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Swipeout"></vx-nav>
    </template>
    <vx-page-body>
      <vx-swipeout
        v-for="(item,index) in list"
        :key="index"
        :open="index===1"
        @close="handleCloseSwipeout"
        @open="handleOpenSwipeout">
        <vx-list-item :image="item.src" image-style="width:1rem;">
          <h4 style="margin:0;overflow: hidden;">{{item.name}}(按我向左滑动)</h4>
          <div>{{item.date}}</div>
        </vx-list-item>
        <template v-slot:action>
          <button @click="handleAction" style="background:#1AAD19;color:#fff;" type="button">顶置</button>
          <button @click="handleAction" style="background:#ffe26d;color:#fff;" type="button">收藏</button>
          <button @click="handleAction" style="background:#ff5500;color:#fff;" type="button">删除</button>
        </template>
      </vx-swipeout>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  data () {
    let list = this.getList()
    return {
      list,
      loading: false,
      end: false // 是否还没有更多
    }
  },
  methods: {
    getList () {
      let result = []
      for (let i = 0; i < 30; i++) {
        result.push({
          src: '/images/github.png',
          name: `item-${Date.now()}`,
          date: new Date().toLocaleString()
        })
      }
      return result
    },
    handleCloseSwipeout () {
      console.log('handleCloseSwipeout')
    },
    handleOpenSwipeout () {
      console.log('handleOpenSwipeout')
    },
    handleAction (e) {
      this.$toast({message: '点击了' + e.target.innerHTML})
    }
  }
}
</script>

<style lang="scss">

</style>
