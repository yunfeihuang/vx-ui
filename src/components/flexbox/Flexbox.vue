<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  props: {
    direction: {
      type: String,
      default: 'row'
    }
  },
  computed: {
    classes () {
      return [
        cssPrefix + 'flexbox',
        this.clas
      ]
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
    &flexbox{
      display: -webkit-flex;
      display: flex;
    }
  }
</style>
