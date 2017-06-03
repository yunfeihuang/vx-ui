<template>
  <component :is="$parent.ripple?'ripple':'div'" position="center" :class="classes" @click="clickHandler">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else-if="text">
      <i class="iconfont" v-html="icon"></i>
      <span>{{text}}</span>
    </template>
  </component>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import Ripple from '../ripple'
export default {
  components: {
    Ripple
  },
  props: {
    text: {
      type: String
    },
    icon: {
      type: String
    }
  },
  methods: {
    clickHandler (e) {
      this.$emit('on-change', this.index)
      this.$emit('click', e)
    }
  },
  computed: {
    classes () {
      let array = ['flexbox-item', cssPrefix + 'tabbar-item']
      if (this.active) {
        array.push(cssPrefix + 'tabbar-item-active')
        array.push(this.$parent.activeClass)
      }
      return array
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
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &tabbar-item{
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
