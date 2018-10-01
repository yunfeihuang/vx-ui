<template>
  <layout>
    <x-nav slot="header" back="/" title="Swipeout"></x-nav>
    <x-body slot="body" v-if="pageState.into">
      <swipeout v-for="(item,index) in list" :key="index" :open="index===1" @close="handleCloseSwipeout" @open="handleOpenSwipeout">
        <flexbox align="center" style="padding:6px">
          <x-img style="width:40px;height:40px;margin-right:6px;border-radius:3px;" :src="item.src" />
          <flexbox-item>
            <h4 style="margin:0;overflow: hidden;">{{item.name}}(按我向左滑动)</h4>
            <div>{{item.date}}</div>
          </flexbox-item>
        </flexbox>
        <button @click="handleAction" style="background:#1AAD19;color:#fff;" slot="action" type="button">顶置</button>
        <button @click="handleAction" style="background:#ffe26d;color:#fff;" slot="action" type="button">收藏</button>
        <button @click="handleAction" style="background:#ff5500;color:#fff;" slot="action" type="button">删除</button>
      </swipeout>
    </x-body>
  </layout>
</template>

<script>
import { children } from 'utils/mixins/page'
export default {
  mixins: [children],
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
