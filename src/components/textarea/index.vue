<template>
  <label :class="classes">
    <div :class="[cssPrefix+'textarea-shadow']"></div>
    <textarea 
      :placeholder="placeholder"
      :readonly="readonly"
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
      >{{value}}</textarea>
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
      styles[cssPrefix + 'textarea-focus'] = this.isFocus
      return [
        cssPrefix + 'textarea-wrapper',
        styles
      ]
    }
  },
  mounted () {
    this.$textarea = this.$el.querySelector('textarea')
    this.$shadow = this.$el.querySelector('.' + cssPrefix + 'textarea-shadow')
    this.renderAutoHeight(this.$textarea.value)
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      isFocus: false
    }
  },
  methods: {
    inputHandler (e) {
      this.renderAutoHeight(e.target.value)
      this.$emit('input', e.target.value)
    },
    renderAutoHeight (value) {
      requestAnimationFrame(() => {
        this.$shadow.innerHTML = value.replace(/(\r|\n)$/, '<br/><span style="color:transparent">s</span>').replace(/(\r|\n)/g, '<br/>')
        this.$el.style.height = this.$shadow.clientHeight + 'px'
      })
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &textarea-wrapper{
      position:relative;
      display:block;
      height:0.9rem;
      min-height: 0.9rem;
      line-height: 16px;
      background:#fff;
      textarea,.#{$css-prefix}textarea-shadow{
        padding:0.26rem 0.15rem;
        width:100%;
        text-align: inherit;
        font-size: inherit;
        line-height: inherit;
        font-family: inherit;
        box-sizing:border-box;
        min-height:inherit;
        color:inherit;
        word-break: break-all;
      }
      textarea{
        height:100%;
        resize: none;
        border:0;
        @include disabled;
        outline: none;
        overflow: hidden;
        vertical-align: middle;
        background:transparent;
        position:relative;
        z-index:1;
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
    &textarea-focus:after{
      width:100%;
    }
    &textarea-shadow{
      position:absolute;
      left:0;
      top:0;
      opacity:0;
    }
  }
</style>
