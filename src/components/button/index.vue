<template>
  <button :class="classes" :disabled="disabled" :type="htmlType" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { button } from 'utils/mixins.js'
export default {
  mixins: [button],
  computed: {
    classes () {
      return [cssPrefix + 'btn', this.type ? (cssPrefix + 'btn-' + this.type) : this.clas]
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    clickHandler (e) {
      this.$emit('on-click', e)
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &btn{
      @include button;
      height:2.6rem;
      position:relative;
      width:100%;
      box-sizing:border-box;
      background-color:#fff;
      border-radius:$border-radius-base;
      font-size: inherit;
      cursor: default;
      @include round-border;
      &:active{
        box-shadow:1px 0 100px rgba(0,0,0,0.15) inset;
      }
      &-primary{
        background-color:$primary-color;
        color:#fff;
        &:before{
          border-color:$primary-color;
          display:none;
        }
      }
      &-warning{
        background-color:$warning-color;
        color:#fff;
        &:before{
          border-color:$warning-color;
          display:none;
        }
      }
      &-dashed{
        background-color:#fff;
        color:$primary-color;
        border:0;
        &:active{
          box-shadow:none;
        }
        &:before{
          border-color:$primary-color;
        }
      }
      @include disabled;
    }
  }
</style>
