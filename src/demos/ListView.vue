<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">ListView (pulldown and pullup)</div>
    </x-nav>
    <x-body slot="body" :scroll="false" class="demos list-view-demos">
      <list-view @pullup="handlePullup" @pulldown="handlePulldown" :loading="loading" :end="end">
        <div v-for="(item,index) in list" :key="index">
          <flexbox align="center" class="list-view-item">
            <x-img class="avatar" :src="item.src" />
            <flexbox-item>
              <h4>{{item.name}}</h4>
              <div>{{item.date}}</div>
            </flexbox-item>
          </flexbox>
          <divider></divider>
        </div>
      </list-view>
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
    handlePullup (e) {
      this.loading = true
      setTimeout(() => { // 模拟ajax请求
        this.list = this.list.concat(this.getList())
        this.loading = false
        if (this.list.length >= 60) {
          this.end = true // 没有更多了
        }
      }, 1000)
    },
    handlePulldown (e) {
      this.loading = true
      setTimeout(() => { // 模拟ajax请求
        this.list = this.getList().concat(this.list)
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
  .list-view-demos .v-list-view{
    height:100%;
    background:#fff;
    position: absolute;
    width: 100%;
  }
  .list-view-demos{
    .avatar{
      width:50px;
      height:50px;
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
</style>
