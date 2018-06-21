<template>
  <div class="cnode-app">
    <layout v-show="$route.path == '/cnode'" :style="`opacity:1;transform:translateX(0)`">
      <x-nav slot="header" :back="false">
        <div slot="title">CNode-专业中文社区</div>
        <tab :active="home.active" @change="handleActive" underline-width="auto">
          <tab-item :name="0">
            全部
          </tab-item>
          <tab-item :name="1">
            精华
          </tab-item>
          <tab-item :name="2">
            分享
          </tab-item>
          <tab-item :name="3">
            问答
          </tab-item>
          <tab-item :name="4">
            招聘
          </tab-item>
        </tab>
      </x-nav>
      <x-body slot="body" :scroll="false" style="background:#fff">
        <list-view @pullup="handlePullup" @pulldown="handlePulldown" :loading="loading">
          <topic-item v-for="item in topics" :item="item" :key="item.id" />
        </list-view>
      </x-body>
    </layout>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { parent } from 'utils/mixins/page'
import { TopicItem } from './components/index'

const tabs = ['all', 'good', 'share', 'ask', 'job']

export default {
  mixins: [parent],
  components: {
    TopicItem
  },
  computed: {
    ...mapState({
      home: state => state.cnode.home
    }),
    loading () {
      return this.home[tabs[this.home.active]].loading
    },
    topics () {
      return this.home[tabs[this.home.active]].data
    }
  },
  created () {
    let tab = tabs[this.home.active]
    if (this.home[tab].data.length === 0) {
      this.$store.dispatch('cnode/home', {
        page: 1,
        tab: tabs[0]
      })
    }
  },
  methods: {
    handleActive (active) {
      let tab = tabs[active]
      this.$store.dispatch('cnode/home', {
        page: 1,
        tab: tab,
        active: active,
        change: true
      })
    },
    handlePullup () {
      let tab = tabs[this.home.active]
      this.$store.dispatch('cnode/home', {
        page: this.home[tab].query.page + 1,
        tab: tab
      })
    },
    handlePulldown () {
      let tab = tabs[this.home.active]
      this.$store.dispatch('cnode/home', {
        page: 1,
        tab: tab
      })
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .vx-list-view,.swiper{
    height:100%;
    width:100%;
    position:absolute!important;
  }
  .cnode-app{
    .vx-layout{
      opacity:0;
      transition: transform 0.32s ease 0s;
      transform: translate3d(100%,0,0);
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      backface-visibility: hidden;
      perspective: 1000;
    }
  }
</style>
