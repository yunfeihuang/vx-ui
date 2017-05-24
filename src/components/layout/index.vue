<template>
  <div :class="classes">
    <div :class="[cssPrefix + 'layout-flexbox']">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  computed: {
    classes () {
      return [cssPrefix + 'layout']
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
    &layout-flexbox{
      position:absolute;
      display:flex;
      height:100%;
      width:100%;
      flex-direction: column;
    }
  }
</style>
