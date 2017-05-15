<template>
  <div :class="_clas" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
export default {
  mixins: [base],
  computed: {
    _clas () {
      return [cssPrefix + 'body', this.scroll ? 'scrollbox' : '', this.clas]
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
    }
  }
</style>
