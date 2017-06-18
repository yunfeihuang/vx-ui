<template>
  <div :class="classes" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  methods: {
    clickHandler (e) {
      this.$emit('on-change', this.index)
      this.$emit('click', e)
    }
  },
  computed: {
    classes () {
      let array = [cssPrefix + 'sidebar-item']
      if (this.active) {
        array.push(cssPrefix + 'sidebar-item-active')
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
    &sidebar-item{
      line-height:0.9rem;
      position:relative;
      overflow:hidden;
      white-space: nowrap;
      &:after{
        @include divider;
      }
      &:before{
        @include divider-vertical;
        right:0;
        left:auto;
      }
      &-active{
        color:$primary-color;
        background:#fff;
        transition: color $transition-time $ease-in-out;
        position:relative;
        z-index:1;
        &:before{
          display:none;
        }
      }
    }
  }
</style>
