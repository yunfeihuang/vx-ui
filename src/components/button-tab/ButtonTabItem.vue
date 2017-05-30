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
      let array = ['flexbox-item', cssPrefix + 'button-tab-item']
      if (this.active) {
        array.push(cssPrefix + 'button-tab-item-active')
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
    &button-tab-item{
      position:relative;
      z-index:1;
      white-space: nowrap;
      overflow: hidden;
      &-active{
        background-color:$primary-color;
        color:#fff;
        // transition: all $transition-time $ease-in-out;
        &:before{
          display:none;
        }
      }
      &:first-child{
        border-top-left-radius:46px;
        border-bottom-left-radius:46px;
        &:before{
          display:none;
        }
      }
      &:last-child{
        border-top-right-radius:46px;
        border-bottom-right-radius:46px;
      }
      &:before{
        content:'';
        border-left:1px solid $border-color-base;
        transform:scaleX(0.5);
        height:100%;
        position:absolute;
        top:0;
        left:0;
      }
    }
  }
</style>
