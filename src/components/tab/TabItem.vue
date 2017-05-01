<template>
  <div :class="_clas" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  methods: {
    clickHandler () {
      this.$emit('on-change', this.index)
    }
  },
  computed: {
    _clas () {
      return [cssPrefix + 'tab-item', this.active ? cssPrefix + 'tab-item-active' : '']
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
    &tab-item{
      flex:1;
      padding:0.8rem 0;
      &-active{
        color:$primary-color;
        transition: color $transition-time $ease-in-out;
      }
    }
  }
</style>
