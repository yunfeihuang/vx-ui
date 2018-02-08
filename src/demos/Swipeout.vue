<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Swipeout</div>
    </x-nav>
    <x-body slot="body" class="swipeout-demos">
      <swipeout v-for="(item,index) in list" :key="index" :open="index===1" @close="handleCloseSwipeout" @open="handleOpenSwipeout">
        <flexbox align="center" class="list-view-item">
          <x-img class="avatar" :src="item.src" />
          <flexbox-item>
            <h4>{{item.name}}(按我向左滑动)</h4>
            <div>{{item.date}}</div>
          </flexbox-item>
        </flexbox>
        <button @click="handleAction" class="swipeout-button" slot="action" type="button">顶置</button>
        <button @click="handleAction" class="swipeout-button" slot="action" type="button">收藏</button>
        <button @click="handleAction" class="swipeout-button" slot="action" type="button">删除</button>
      </swipeout>
    </x-body>
  </layout>
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
      this.$toast({content: '点击了' + e.target.innerHTML})
    }
  }
}
</script>

<style lang="scss">
  .swipeout-demos{
    background:#fff;
    .avatar{
      width:40px;
      height:40px;
      margin-right:6px;
      border-radius:3px;
    }
    .list-view-item{
      padding:6px
    }
    h4{
      margin:0;
      overflow: hidden;
    }
  }
  .swipeout-button{
    background:#1AAD19!important;
    color:#fff;
    min-width:60px!important;
  }
  .swipeout-button:nth-child(2){
    background:#ffe26d!important;
    color:#fff;
  }
  .swipeout-button:nth-child(3){
    background:#ff5500!important;
    color:#fff;
  }
</style>
