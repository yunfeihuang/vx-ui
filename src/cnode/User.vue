<template>
  <layout>
    <x-header slot="header">
      <div slot="title">用户详情</div>
    </x-header>
    <x-body slot="body" :class="clas">
      <div>
        <div class="userinfo">
          <img :src="user.avatar_url" class="user-avatar" />
          <h4>{{user.loginname}}</h4>
          积分：{{user.score}}
        </div>
        <divider></divider>
        <div class="user-title">最近创建的话题</div>
        <div class="user-comments">
          <divider></divider>
          <base-item v-for="item in user.recent_topics" >
            <x-link slot="img" :href="item.user_href">
              <x-img :src="item.author.avatar_url"/>
            </x-link>
            <x-link slot="content" :href="item.href">
              <h4>{{item.title}}</h4>
              <div class="weak">
              {{item.last_reply_at}}
              </div>
            </x-link>
          </base-item>
        </div>
        <div class="user-title">最近参与的话题</div>
        <div class="user-comments">
          <divider></divider>
          <base-item v-for="item in user.recent_replies" >
            <x-link slot="img" :href="item.user_href">
              <x-img :src="item.author.avatar_url"/>
            </x-link>
            <div slot="content">
              <h4>{{item.title}}</h4>
              <div class="weak">
              {{item.last_reply_at}}
              </div>
            </div>
          </base-item>
        </div>
      </div>
    </x-body>
  </layout>
</template>

<script>
import { mapGetters } from 'vuex'

import {
  Layout,
  XHeader,
  XBody,
  XImg,
  XLink,
  Divider
} from 'components'

import BaseItem from './components/BaseItem'

export default {
  components: {
    Layout,
    XHeader,
    XBody,
    XImg,
    XLink,
    Divider,
    BaseItem
  },
  computed: {
    ...mapGetters({
      user: 'user'
    }),
    clas () {
      let array = ['user']
      Object.keys(this.user).length === 0 && array.push('user-placeholder')
      return array
    }
  },
  mounted () {
    this.$store.dispatch('user', {
      id: this.$route.params.id
    })
  },
  destroyed () {
    this.$store.dispatch('destroyed', {
      key: 'user',
      value: {}
    })
  }
}
</script>

<style lang="scss">
  .user{
    &-placeholder{
      background:url('./images/body_placeholder.png') no-repeat;
      background-size:100% auto;
      >div{
        opacity:0
      }
    }
  }
  .userinfo{
    text-align:center;
    background:#fff;
    padding:1rem 0;
    h4{
      font-size:1.1rem;
    }
  }
  .user-avatar{
    width:5rem;
    height:5rem;
    margin: auto;
  }
  .user-comments{
    background:#fff;
  }
  .user-title{
    margin:15px 5px 5px 5px;
  }
</style>
