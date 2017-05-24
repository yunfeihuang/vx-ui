<template>
  <label :class="classes">
    <slot name="icon"></slot>
    <input 
      :type="htmlType"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="value"
      :disabled="disabled" 
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :name="name" 
      :required="required"
      @focus="focusHandler"
      @blur="blurHandler"
      @keyup="keyupHandler"
      @keydown="keydownHandler" 
      @change="changeHandler"
      @input="inputHandler"
      />
    <transition name="input-clear-fade">
      <button type="button" v-if="clear&&isFocus" :class="cssPrefix + 'input-clear-button'" @click="clearHandler">
        <i class="iconfont">&#xe641;</i>
      </button>
    </transition>
  </label>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { input } from 'utils/mixins.js'
export default {
  mixins: [input],
  computed: {
    classes () {
      let styles = {}
      styles[cssPrefix + 'input-focus'] = this.isFocus
      styles[cssPrefix + 'input-clear'] = !!this.value
      return [
        cssPrefix + 'input-wrapper',
        styles
      ]
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      isFocus: false
    }
  },
  methods: {
    clearHandler (e) {
      this.$el.classList.remove(this.cssPrefix + 'input-clear')
      this.$emit('on-change', '')
    },
    inputHandler (e) {
      if (e.target.value) {
        this.$el.classList.add(this.cssPrefix + 'input-clear')
      } else {
        this.$el.classList.remove(this.cssPrefix + 'input-clear')
      }
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &input-wrapper{
      position:relative;
      display:block;
      height:2.6rem;
      .iconfont{
        color:$sub-color;
      }
      >.iconfont:first-child{
        line-height: 100%;
        position: absolute;
        left: 5px;
        top: 50%;
        margin: -8px 0;
      }
      >.iconfont:first-child+input{
        padding-left:30px;
      }
      input{
        border:0;
        width:100%;
        height:100%;
        box-sizing:border-box;
        outline: none;
        text-align: inherit;
        font-size: inherit;
        padding-left: 0.8rem;
        vertical-align: middle;
        @include disabled;
      }
      
      &:before{
        @include divider;
        z-index:1;
      }
      &:after{
        @include divider($primary-color);
        width:0;
        transition:width 0.4s $ease-in-out;
        z-index:2;
      }
    }
    &input-focus:after{
      width:100%;
    }
    &input-clear-button{
      position:absolute;
      top:0;
      right:0;
      @include button;
      width:40px;
      height:100%;
      display:none;
    }
    &input-clear{
      .#{$css-prefix}input-clear-button{
        display:block;
      }
      input{
        padding-right:40px;
      }
    }
  }
  .input-clear-fade-enter-active, .input-clear-fade-leave-active {
    transition: opacity $transition-time
  }
  .input-clear-fade-enter, .confirm-fade-leave-active {
    opacity: 0
  }
</style>
