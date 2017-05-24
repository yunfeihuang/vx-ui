<template>
  <div :class="classes" :style="styles" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  props: {
    opacity: {
      type: Number,
      default: 0.35
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'overlay']
    },
    styles () {
      return 'opacity:' + this.opacity
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    clickHandler (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &overlay{
      position:absolute;
      left:0;
      top:0;
      height:100%;
      width:100%;
      background:#000;
      user-select: none;
    }
  }
</style>
