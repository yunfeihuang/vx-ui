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
      return ['flexbox', cssPrefix + 'button-tab']
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
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &button-tab{
      text-align:center;
      position:relative;
      border-radius:48px;
      user-select: none;
      line-height:2.4rem;
      @include round-border($border-color-base,48px);
    }
  }
</style>
