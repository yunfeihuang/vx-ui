<template>
  <div :class="classes">
    <div v-if="title" :class="[cssPrefix+'group-title']">{{title}}</div>
    <div :class="[cssPrefix+'group-inner']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  props: {
    title: {
      type: String
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'group']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &group{
      margin: 0.25rem 0;
      padding-top:1px;
      padding-bottom:1px;
      &-title{
        padding:0.1rem 0.15rem;
      }
      &-inner{
        position:relative;
        background:#fff;
        &:before,&:after{
          @include divider
        }
        &:before{
          top:0;
        }
      }
    }
  }
</style>
