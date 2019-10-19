<template>
  <page type="primary">
    <x-nav slot="header" title="ListView (pulldown and pullup)"></x-nav>
    <x-body slot="body" :scroll="false" v-if="slideIn">
      <list-view
        style="height:100%;position: absolute;width: 100%;"
        :loading="loading"
        :end="end"
        @pullup="handlePullup"
        @pulldown="handlePulldown">
        <list-item v-for="(item,index) in list" :key="index" divider :image="item.src" image-style="width:1rem;">
          <template>
            <h4 style="margin:0;overflow: hidden;">{{item.name}}</h4>
            <div>{{item.date}}</div>
          </template>
        </list-item>
      </list-view>
    </x-body>
  </page>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      loading: true,
      end: false // 是否还没有更多
    }
  },
  mounted () {
    setTimeout(() => {
      this.list = this.getList()
      this.loading = false
    }, 2000)
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
        if (this.list.length >= 100) {
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

</style>
