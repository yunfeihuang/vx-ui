<template>
  <label :class="classes" :style="styles" :disabled="disabled" >
    <input type="radio" :name="name" :value="value" :disabled="disabled" :checked="checked" @change="changeHandler"/>
    <span :class="[cssPrefix + 'radio-icon']"><i class="iconfont">&#xe632;</i></span>
    <slot></slot>
  </label>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base, input } from 'utils/mixins.js'
export default {
  mixins: [base, input],
  computed: {
    classes () {
      return [cssPrefix + 'radio', this.clas]
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    changeHandler (e) {
      this.$emit('on-change', e)
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &radio{
      display:block;
      position:relative;
      padding-right:32px;
      padding-top:0.8rem;
      padding-bottom:0.8rem;
      @include disabled;
      input{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:1;
        opacity:0;
        padding:0;
        margin:0;
      }
      .#{$css-prefix}radio-icon{
        position:absolute;
        right:6px;
        top:50%;
        width: 20px;
        height: 20px;
        margin-top:-11px;
        display:none;
      }
      input:checked+.#{$css-prefix}radio-icon{
        color:$primary-color;
        display:block;
        .iconfont{
          font-size:20px;
        }
      }
    }
  }
</style>
