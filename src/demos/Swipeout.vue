<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Swipeout</div>
    </x-header>
    <x-body slot="body" :scroll="false" class="demos flow-demos">
      <flow :loading="loading" :end="end">
        <template v-for="(item,index) in list">
          <swipeout :open="index===1" @on-close="closeSwipeoutHandler" @on-open="openSwipeoutHandler">
            <flexbox align="center" class="flow-item">
              <x-img class="avator" :src="item.author.avatar_url" />
              <flexbox-item>
                <h4>按住我向左滑动</h4>
                <div>
                  {{new Date().toLocaleString()}}
                </div>
              </flexbox-item>
            </flexbox>
            <button class="swipeout-button" slot="action" type="button">顶置</button>
            <button class="swipeout-button" slot="action" type="button">收藏</button>
            <button class="swipeout-button" slot="action" type="button">删除</button>
          </swipeout>
          <divider></divider>
        </template>
      </flow>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Flow,
  Divider,
  Swipeout,
  XImg,
  Flexbox,
  FlexboxItem
} from '../components'

import api from '../api'

let lastPage = 1
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Flow,
    Divider,
    Swipeout,
    XImg,
    Flexbox,
    FlexboxItem
  },
  mounted () {
    this.fetch()
  },
  methods: {
    closeSwipeoutHandler () {
      console.log('closeSwipeoutHandler')
    },
    openSwipeoutHandler () {
      console.log('openSwipeoutHandler')
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
  .flow-demos .v-flow{
    height:100%;
    background:#fff;
    position: absolute;
    width: 100%;
  }
  .flow-demos{
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
