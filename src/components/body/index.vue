<template>
  <flexbox-item :class="classes">
    <slot></slot>
  </flexbox-item>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import {FlexboxItem} from '../flexbox'
export default {
  components: {
    FlexboxItem
  },
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
      position:relative;
    }
  }
</style>
