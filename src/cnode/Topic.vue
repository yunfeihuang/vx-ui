<template>
  <layout>
    <x-header slot="header">
      <div slot="title">主题详情</div>
    </x-header>
    <x-body slot="body" :class="clas">
      <div>
        <div class="topic-header">
          <h1><topic-type :type="type"/>{{topic.title}}</h1>
          <p class="weak small">
          发布于 {{topic.create_at}}<span class="space"></span>
          作者 {{topic.author && topic.author.loginname}}<span class="space"></span>
          {{topic.visit_count}} 次浏览<span class="space"></span> 
          最后一次编辑是 {{topic.last_reply_at}}
          </p>
        </div>
        <divider></divider>
        <div class="topic-content" v-html="topic.content"></div>
        <divider></divider>
        <div style="margin:15px 5px 5px 5px;">主题回复</div>
        <div class="topic-comments">
          <divider></divider>
          <base-item v-if="topic.replies" v-for="item in topic.replies" :key="item.id">
            <x-link slot="img" :href="item.user_href">
              <x-img :src="item.author.avatar_url" />
            </x-link>
            <div slot="content">
              <div v-html="item.content"></div>
              <div class="weak">
              {{item.create_at}}
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
  Divider,
  XLink
} from 'components'

import {BaseItem, TopicType} from './components/index'

export default {
  components: {
    Layout,
    XHeader,
    XBody,
    XImg,
    Divider,
    BaseItem,
    XLink,
    TopicType
  },
  computed: {
    ...mapGetters({
      topic: 'topic'
    }),
    clas () {
      let array = ['topic']
      Object.keys(this.topic).length === 0 && array.push('topic-placeholder')
      return array
    },
    type () {
      if (this.topic.top) {
        return 'top'
      }
      if (this.topic.good) {
        return 'good'
      }
      return this.topic.tab
    }
  },
  created () {
    this.$store.dispatch('topic', {
      id: this.$route.params.id
    })
  },
  destroyed () {
    this.$store.dispatch('destroyed', {
      key: 'topic',
      value: {}
    })
  }
}
</script>

<style lang="scss">
  .topic{
    &-placeholder{
      background:url('./images/body_placeholder.png') no-repeat;
      background-size:100% auto;
      >div{
        opacity:0
      }
    }
    h1,
    h2,
    h3,
    h4{
      font-size:1.1rem;
      font-weight: normal;
      margin:5px;
    }
    img{
      max-width:100%;
    }
    .topic-header{
      h1{
        font-size:1.2rem;
        margin:10px;
        font-weight: normal;
      }
      p{
        font-size:0.8rem;
        color:#999;
        margin:8px;
      }
    }
    .topic-content{
      background:#fff;
      padding:10px;
      word-break: break-all;
      overflow:hidden;
    }
    a{
      color:#3399ff;
      text-decoration: none!important;
    }
  }
  .topic-comments{
    background:#fff;
    p{
      margin:0
    }
  }
</style>
