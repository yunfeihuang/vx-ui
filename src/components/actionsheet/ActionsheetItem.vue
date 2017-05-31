<template>
  <div :class="classes" @click="clickHandler">
    <div :class="cssPrefix + 'action-sheet-item-text'" :disabled="disabled">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'action-sheet-item', this.checked ? cssPrefix + 'action-sheet-item-active' : '']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      checked: false
    }
  },
  methods: {
    clickHandler () {
      !this.disabled && this.$emit('click', this.value)
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &action-sheet-item{
      padding:$item-padding;
      position:relative;
      border-left: 0.8rem solid transparent;
      border-right: 0.8rem solid transparent;
      user-select:none;
      white-space: nowrap;
      overflow: hidden;
      @include active;
      &-text{
        @include disabled;
      }
      &:after{
        @include divider;
      }
      &:last-child:after{
        display:none;
      }
      &-active{
        color:$primary-color;
      }
    }
  }
</style>
