<template>
  <div :class="classes">
    <div :class="cssPrefix + 'spinner'"></div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  props: {
    color: {
      type: String
    },
    primaryColor: {
      type: String
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'spinner-wrapper']
    }
  },
  mounted () {
    if (this.color) {
      this.$el.children[0].style.borderColor = this.color
    }
    if (this.primaryColor) {
      this.$el.children[0].style.borderTopColor = this.primaryColor
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &spinner{
      position:absolute;
      height:100%;
      width:100%;
      animation: loading 0.6s infinite linear;
      border:2px solid #eee;
      border-top-color: $primary-color;
      border-radius:50%;
      box-sizing:border-box;
      &-wrapper{
        position:relative;
        display: inline-block;
        vertical-align: middle;
        width:20px;
        height:20px;
      }
    }
  }
  @keyframes loading {
    0% {
      transform:rotate(0deg)
    }
    100% {
      transform:rotate(360deg)
    }
  }
</style>
