<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav title="ListView (pulldown and pullup)"></vx-nav>
    </template>
    <vx-page-body  :scroll="false">
      <vx-list-view
        style="height:100%;position: absolute;width: 100%;"
        v-model:loading="loading"
        :end="end"
        @pullup="handlePullup"
        @pulldown="handlePulldown">
        <vx-list-item v-for="(item,index) in list" :key="index" divider :image="item.src" image-style="width:1rem;">
          <h4 style="margin:0;overflow: hidden;">{{item.name}}</h4>
          <div>{{item.date}}</div>
        </vx-list-item>
      </vx-list-view>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      loading: 0,
      end: false // 是否还没有更多
    }
  },
  mounted () {
    setTimeout(() => {
      this.list = this.getList()
      this.loading = 0
    }, 2000)
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
    handlePullup () {
      setTimeout(() => { // 模拟ajax请求
        this.list = this.list.concat(this.getList())
        this.loading = 0
        if (this.list.length >= 100) {
          this.end = true // 没有更多了
        }
      }, 1000)
    },
    handlePulldown () {
      setTimeout(() => { // 模拟ajax请求
        this.list = this.getList().concat(this.list)
        this.loading = 0
      }, 1000)
    }
  }
}
</script>

<style lang="scss">

</style>
