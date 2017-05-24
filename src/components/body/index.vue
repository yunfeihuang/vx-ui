<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  computed: {
    classes () {
      return [cssPrefix + 'body', this.scroll ? 'scrollbox' : '']
    }
  },
  props: {
    scroll: {
      type: Boolean,
      default: true
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
    &body{
      overflow:auto;
      flex:1;
      position:relative;
    }
  }
</style>
