<template>
  <div :class="classes" @click="clickHandler">
    <div :class="[cssPrefix+'sticky-inner']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import sticky from './sticky'
export default {
  props: {
    scrollBox: {
      type: String
    },
    offset: {
      type: Number,
      default: 0
    },
    checkStickySupport: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'sticky-box']
    }
  },
  mounted () {
    sticky(this.$el.children[0], {
      scrollBox: this.scrollBox,
      offset: this.offset,
      checkStickySupport: this.checkStickySupport
    })
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
    &sticky{
      &-sticky{
        width: 100%;
        position: sticky;
        top: 0;
      }
      &-box{
        z-index:100;
        position: relative;
      }
      &-fixed{
        width: 100%;
        position: fixed;
        top: 0;
      }
    }
  }
</style>
