<template>
  <div :class="classes" :style="_style" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
export default {
  mixins: [base],
  props: {
    opacity: {
      type: Number,
      default: 0.35
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'overlay', this.clas]
    },
    _style () {
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
