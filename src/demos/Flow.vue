<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Flow</div>
    </x-header>
    <x-body slot="body" :scroll="false" class="demos flow-demos">
      <flow @on-pullup="pullupHandler" @on-pulldown="pulldownHandler" :loading="loading" :end="end">
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
    XImg,
    Flexbox,
    FlexboxItem
  },
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
  .flow-demos .v-flow{
    height:100%;
    background:#fff;
    position: absolute;
    width: 100%;
  }
  .flow-demos{
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
    }
  }
</style>
