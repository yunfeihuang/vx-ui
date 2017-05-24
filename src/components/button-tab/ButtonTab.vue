<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { tab } from 'utils/mixins.js'
export default {
  mixins: [tab],
  computed: {
    classes () {
      return [cssPrefix + 'button-tab']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      childLength: this.$children.length
    }
  },
  methods: {
    changeHandler (val) {
      this.$emit('click', val)
      if (val !== this.active) {
        this.$emit('on-change', val)
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  .#{$css-prefix}{
    &button-tab{
      display:flex;
      text-align:center;
      position:relative;
      border:1px solid $primary-color;
      border-radius:48px;
      overflow:hidden;
      user-select: none;
      line-height:100%;
    }
  }
</style>
