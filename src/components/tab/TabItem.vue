<template>
  <div :class="classes" @click="clickHandler">
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
    classes () {
      let array = ['flexbox-item', cssPrefix + 'tab-item']
      if (this.active) {
        array.push(cssPrefix + 'tab-item-active')
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
    &tab-item{
      white-space: nowrap;
      overflow: hidden;
      &-active{
        color:$primary-color;
        // transition: color $transition-time $ease-in-out;
      }
    }
  }
</style>
