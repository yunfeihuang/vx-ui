<template>
  <span :class="classes" v-html="myText"></span>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  computed: {
    classes () {
      return [cssPrefix + 'badge', this.text === '' ? cssPrefix + 'badge-dot' : '']
    },
    myText () {
      if (typeof this.text === 'number' && this.max) {
        if (this.text > this.max) {
          return this.ellipsis
        }
      }
      return this.text
    }
  },
  props: {
    text: {
      type: [String, Number],
      default: ''
    },
    max: {
      type: Number,
      default: 9
    },
    ellipsis: {
      type: String,
      default: '<span class="badge-ellipsis">•••</span>'
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
    &badge{
      display: inline-block;
      background: $error-color;
      color: #fff;
      font-size: 12px;
      height: 16px;
      line-height: 16px;
      border-radius: 8px;
      padding: 0 5px;
      background-clip: padding-box;
      vertical-align: middle;
      text-align:center;
      &-dot{
        height: auto;
        padding: 4px;
        position:relative;
        top:-1px;
      }
      .badge-ellipsis{
        margin:0 -3px;
      }
    }
  }
</style>
