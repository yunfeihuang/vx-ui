<template>
  <div :class="_clas" :style="style" @click="clickHandler">
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
import { base } from 'utils/mixins.js'
export default {
  mixins: [base],
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
    _clas () {
      return [cssPrefix + 'cell', this.arrow ? cssPrefix + 'cell-access' : '', this.clas]
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
