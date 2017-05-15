<template>
  <div :class="_clas" :style="styles" >
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
      return [cssPrefix + 'divider', this.clas]
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &divider{
      @include divider;
      position:static;
    }
  }
</style>
