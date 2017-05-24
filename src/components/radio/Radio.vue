<template>
  <label :class="classes" :disabled="disabled" >
    <input type="radio" :name="name" :value="value" :disabled="disabled" :checked="checked" @change="changeHandler"/>
    <span :class="[cssPrefix + 'radio-icon']"><i class="iconfont">&#xe632;</i></span>
    <slot></slot>
  </label>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { input } from 'utils/mixins.js'
export default {
  mixins: [input],
  computed: {
    classes () {
      return [cssPrefix + 'radio']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    changeHandler (e) {
      this.$emit('on-change', e.target.value)
      this.$emit('input', e.target.value)
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
      padding: 0.86rem 0.5rem;
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
      &-icon{
        position:absolute;
        right:0.5rem;
        top:50%;
        width: 20px;
        height: 20px;
        margin-top:-10px;
        display:none;
        .iconfont{
          font-size:20px;
        }
      }
      input:checked + &-icon{
        color:$primary-color;
        display:block;
      }
    }
  }
</style>
