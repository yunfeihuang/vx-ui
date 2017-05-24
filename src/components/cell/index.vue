<template>
  <div :class="classes" @click="clickHandler">
    <div :class="cssPrefix + 'cell-hd'">
      <slot name="icon"></slot>
    </div>
    <div :class="cssPrefix + 'cell-bd'">
      <slot name="title"></slot>
    </div>
    <div :class="cssPrefix + 'cell-ft'">
      <slot name="value"></slot>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  props: {
    arrow: {
      type: Boolean,
      default: true
    },
    href: {
      type: String
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'cell', this.arrow ? cssPrefix + 'cell-access' : '']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    clickHandler (e) {
      if (this.href) {
        location.href = this.href
      }
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &cell{
      display:flex;
      padding:0.4rem 0.6rem;
      height:2rem;
      position:relative;
      justify-content: center;
      align-items: center;
      &-bd{
        flex:1;
        text-align:left;
      }
      &-ft{
        position:relative;
      }
      &:after{
        @include divider;
      }
    }
    &cell-access{
      @include active;
      .#{$css-prefix}cell-ft{
        padding-right:12px;
        color:$sub-color;
        &:after{
          @include arrow;
        }
      }
    }
  }
</style>
