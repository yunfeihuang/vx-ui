<template>
  <component :is="$parent.ripple?'ripple':'div'" position="center" :class="classes" @click="clickHandler">
    <slot></slot>
  </component>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import Ripple from '../ripple'
import Icon from '../icon'
export default {
  components: {
    Ripple,
    Icon
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
      padding:0.15rem 0;
      &-active{
        color:$primary-color;
        transition: color $transition-time $ease-in-out;
      }
      .#{$css-prefix}iconfont{
        display:block;
      }
      span{
        font-size:0.2rem;
      }
    }
  }
</style>
