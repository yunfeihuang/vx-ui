<template>
  <layout>
    <x-nav slot="header" title="主题详情"></x-nav>
    <x-body slot="body" :class="clas">
      <div v-if="pageState.into">
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
            <router-link slot="img" :to="item.user_href">
              <x-img :src="item.author.avatar_url" />
            </router-link>
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
import { mapState } from 'vuex'
import { children } from 'utils/mixins/page'
import {BaseItem, TopicType} from './components/index'

export default {
  mixins: [children],
  components: {
    BaseItem,
    TopicType
  },
  computed: {
    ...mapState({
      topic: state => state.cnode.topic
    }),
    clas () {
      return ['topic', {
        'topic-placeholder': Object.keys(this.topic).length === 0 || !this.pageState.into
      }]
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
    this.$store.dispatch('cnode/topic', {
      id: this.$route.params.id
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('cnode/topic', {
      id: to.params.id
    })
    next()
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
      font-size:1.1em;
      font-weight: normal;
      margin:5px;
    }
    img{
      max-width:100%;
    }
    .topic-header{
      h1{
        font-size:1.2em;
        margin:10px;
        font-weight: normal;
      }
      p{
        font-size:0.8em;
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
