<template>
  <flexbox :class="classes" align="center" justify="center" @click="clickHandler">
    <div :class="cssPrefix + 'cell-hd'">
      <slot name="icon"></slot>
    </div>
    <flexbox-item :class="cssPrefix + 'cell-bd'">
      <slot name="title"></slot>
    </flexbox-item>
    <div :class="cssPrefix + 'cell-ft'">
      <slot name="value"></slot>
    </div>
  </flexbox>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import {Flexbox, FlexboxItem} from '../flexbox'
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
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
      padding:0.4rem 0.6rem;
      height:2rem;
      position:relative;
      &-bd{
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
