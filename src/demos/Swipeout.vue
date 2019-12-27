<template>
  <page>
    <x-nav slot="header" title="Swipeout"></x-nav>
    <page-body slot="body" v-if="slideIn">
      <swipeout
        v-for="(item,index) in list"
        :key="index"
        :open="index===1"
        @close="handleCloseSwipeout"
        @open="handleOpenSwipeout">
        <list-item :image="item.src" image-style="width:1rem;">
          <template>
            <h4 style="margin:0;overflow: hidden;">{{item.name}}(按我向左滑动)</h4>
            <div>{{item.date}}</div>
          </template>
        </list-item>
        <button @click="handleAction" style="background:#1AAD19;color:#fff;" slot="action" type="button">顶置</button>
        <button @click="handleAction" style="background:#ffe26d;color:#fff;" slot="action" type="button">收藏</button>
        <button @click="handleAction" style="background:#ff5500;color:#fff;" slot="action" type="button">删除</button>
      </swipeout>
    </page-body>
  </page>
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
          src: './static/images/github.png',
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
