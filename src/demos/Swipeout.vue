<template>
  <layout>
    <x-nav slot="header" :back="{path:'/'}">
      <div slot="title">Swipeout</div>
    </x-nav>
    <x-body slot="body" :scroll="false" class="demos list-view-demos">
      <list-view :loading="loading" :end="end">
        <template v-for="(item,index) in list">
          <swipeout :open="index===1" @close="handleCloseSwipeout" @open="handleOpenSwipeout">
            <flexbox align="center" class="flow-item">
              <x-img class="avator" :src="item.author.avatar_url" />
              <flexbox-item>
                <h4>按住我向左滑动</h4>
                <div>
                  {{new Date().toLocaleString()}}
                </div>
              </flexbox-item>
            </flexbox>
            <button @click="handleAction" class="swipeout-button" slot="action" type="button">顶置</button>
            <button @click="handleAction" class="swipeout-button" slot="action" type="button">收藏</button>
            <button @click="handleAction" class="swipeout-button" slot="action" type="button">删除</button>
          </swipeout>
        </template>
      </list-view>
    </x-body>
  </layout>
</template>

<script>

import api from '../api'

let lastPage = 1
export default {
  mounted () {
    this.fetch()
  },
  methods: {
    handleCloseSwipeout () {
      console.log('handleCloseSwipeout')
    },
    handleOpenSwipeout () {
      console.log('handleOpenSwipeout')
    },
    handleAction (e) {
      window.$toast({content: '点击了' + e.target.innerHTML})
    },
    fetch (page = 1, cb) {
      let bool = page > lastPage
      if (bool) {
        lastPage = page
      }
      this.loading = true
      api.cnode.list({page: page, tab: ''}).then((data) => {
        this.loading = false
        if (bool) {
          this.list = this.list.concat(data.data)
        } else {
          this.list = data.data.concat(this.list)
        }
        if (page > 2 && !this.end) {
          this.end = true
        }
        cb && cb()
      })
    }
  },
  data () {
    return {
      list: [],
      loading: true,
      end: false
    }
  }
}
</script>

<style lang="scss">
  .list-view-demos .v-flow{
    height:100%;
    background:#fff;
    position: absolute;
    width: 100%;
  }
  .list-view-demos{
    .avator{
      width:40px;
      height:40px;
      margin-right:6px;
      border-radius:3px;
    }
    .flow-item{
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
