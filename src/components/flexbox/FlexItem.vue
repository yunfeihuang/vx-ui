<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
export default {
  mixins: [base],
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'flex-item', this.clas]
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
