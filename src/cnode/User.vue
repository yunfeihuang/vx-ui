<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">用户详情</div>
    </x-nav>
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
          <base-item v-for="item in user.recent_topics" :key="item.id+'topics'">
            <router-link slot="img" :to="item.user_href">
              <x-img :src="item.author.avatar_url"/>
            </router-link>
            <router-link slot="content" :to="item.href">
              <h4>{{item.title}}</h4>
              <div class="weak">
              {{item.last_reply_at}}
              </div>
            </router-link>
          </base-item>
        </div>
        <div class="user-title">最近参与的话题</div>
        <div class="user-comments">
          <divider></divider>
          <base-item v-for="item in user.recent_replies" :key="item.id+'replies'" >
            <router-link slot="img" :to="item.user_href">
              <x-img :src="item.author.avatar_url"/>
            </router-link>
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
import { mapState } from 'vuex'

import BaseItem from './components/BaseItem'

export default {
  components: {
    BaseItem
  },
  computed: {
    ...mapState({
      user: state => state.cnode.user
    }),
    clas () {
      let array = ['user']
      Object.keys(this.user).length === 0 && array.push('user-placeholder')
      return array
    }
  },
  created () {
    this.$store.dispatch('cnode/user', {
      id: this.$route.params.id
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('cnode/user', {
      id: to.params.id
    })
    next()
  },
  destroyed () {
    this.$store.dispatch('cnode/destroyed', {
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
    padding:0.2rem 0;
    h4{
      font-size:1.1em;
    }
  }
  .user-avatar{
    width:1rem;
    height:1rem;
    margin: auto;
  }
  .user-comments{
    background:#fff;
  }
  .user-title{
    margin:15px 5px 5px 5px;
  }
</style>
