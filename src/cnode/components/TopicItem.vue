<template>
  <list-item divider
    class="topic-item"
    :to="item.href">
    <router-link @click.native.stop slot="image" :to="item.user_href">
      <x-img :src="item.author.avatar_url" style="width:1rem;border-radius:0.1rem" />
    </router-link>
    <template>
      <h4><topic-type :type="type"/>{{item.title}}</h4>
      <div class="assist">
      {{item.reply_count}}/{{item.visit_count}}
      {{new Date().toLocaleString()}}
      </div>
    </template>
  </list-item>
</template>

<script>
import TopicType from './TopicType'

export default {
  components: {
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
      line-height:1.2;
      margin:0;
      @include lineClamp;
    }
  }
</style>
