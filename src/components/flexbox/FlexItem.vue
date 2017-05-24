<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'flex-item']
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
    &flex-item{
      -webkit-flex:1;
      flex:1;
    }
  }
</style>
