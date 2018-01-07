<template>
  <base-item class="topic-item">
    <router-link slot="img" :to="item.user_href">
      <x-img :src="item.author.avatar_url"/>
    </router-link>
    <router-link slot="content" :to="item.href" :active="false">
      <h4><topic-type :type="type"/>{{item.title}}</h4>
      <div class="weak">
      {{item.reply_count}}/{{item.visit_count}}
      {{new Date().toLocaleString()}}
      </div>
    </router-link>
  </base-item>
</template>

<script>
import BaseItem from './BaseItem'
import TopicType from './TopicType'

export default {
  components: {
    BaseItem,
    TopicType
  },
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    type () {
      if (this.item.top) {
        return 'top'
      }
      if (this.item.good) {
        return 'good'
      }
      return this.item.tab
    }
  }
}
</script>

<style lang="scss">
  .topic-item{
    h4{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
