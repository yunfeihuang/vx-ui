<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">ListView (pulldown and pullup)</div>
    </x-nav>
    <x-body slot="body" :scroll="false" class="demos list-view-demos">
      <list-view @on-pullup="pullupHandler" @on-pulldown="pulldownHandler" :loading="loading" :end="end">
        <template v-for="item in list">
          <flexbox align="center" class="flow-item">
            <x-img class="avator" :src="item.author.avatar_url" />
            <flexbox-item>
              <h4>{{item.title}}</h4>
              <div>
                {{new Date().toLocaleString()}}
              </div>
            </flexbox-item>
          </flexbox>
          <divider></divider>
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
    pullupHandler (e) {
      this.fetch(lastPage + 1)
    },
    pulldownHandler (e) {
      this.fetch(1)
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
      width:50px;
      height:50px;
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
</style>
