<template>
  <div :class="_clas" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
export default {
  mixins: [base],
  props: {
    direction: {
      type: String,
      default: 'row'
    }
  },
  computed: {
    _clas () {
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
