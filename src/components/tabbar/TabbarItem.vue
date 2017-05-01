<template>
  <div :class="_clas" @click="clickHandler">
    <i class="iconfont" v-html="icon"></i>
    <span>{{text}}</span>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  props: {
    text: {
      type: String
    },
    icon: {
      type: String
    }
  },
  methods: {
    clickHandler () {
      this.$emit('on-change', this.index)
    }
  },
  computed: {
    _clas () {
      return [cssPrefix + 'tabbar-item', this.active ? cssPrefix + 'tabbar-item-active' : '']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      active: false
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  .#{$css-prefix}{
    &tabbar-item{
      flex:1;
      cursor: pointer;
      padding:0.5rem 0;
      &-active{
        color:$primary-color;
        transition: color $transition-time $ease-in-out;
      }
      .iconfont{
        display:block;
      }
      span{
        font-size:0.7rem;
      }
    }
  }
</style>
