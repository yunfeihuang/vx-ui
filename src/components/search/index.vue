<template>
  <div :class="_clas" :style="style">
    <div :class="[cssPrefix + 'search-inner',this.fixed ? cssPrefix+'search-fixed' : '']">
      <div :class="[cssPrefix + 'search']">
        <button :class="[cssPrefix + 'search-cancel']" type="button" @click="cancelHandler" v-if="fixed">
          <i class="iconfont">&#xe660;</i>
        </button>
        <x-input
          :htmlType="htmlType"
          :placeholder="placeholder"
          :readonly="readonly"
          :value="value"
          :disabled="disabled" 
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          :maxlength="maxlength"
          :name="name" 
          :clear="clear"
          :required="required"
          @on-focus="focusHandler"
          @on-blur="blurHandler"
          @on-keyup="keyupHandler"
          @on-keydown="keydownHandler" 
          @on-change="changeHandler"
        >
          <i slot="icon" :class="['iconfont',cssPrefix + 'search-icon']">&#xe651;</i>
        </x-input>
      </div>
      <div :class="[cssPrefix + 'search-result']" v-if="fixed">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base, input } from 'utils/mixins.js'
import XInput from '../input'
export default {
  mixins: [base, input],
  components: {
    XInput
  },
  computed: {
    _clas () {
      return [cssPrefix + 'search-wrapper', this.clas]
    }
  },
  watch: {
    isFocus (value) {
      value && (this.fixed = true)
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      fixed: false
    }
  },
  methods: {
    focusHandler (e) {
      this.isFocus = this.fixed = true
      this.$emit('on-focus', e)
    },
    changeHandler (value) {
      this.$emit('on-change', value)
    },
    cancelHandler () {
      this.fixed = false
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &search{
      position:relative;
      background:#ddd;
      padding:1px;
      display:flex;
      .#{$css-prefix}input-wrapper{
        height:1.8rem;
        flex:1;
        margin: 4px;
        input{
          border-radius:1rem;
        }
        &:before,&:after{
          display:none;
        }
        
      }
      .#{$css-prefix}input-clear-button{
        width:40px;
        .iconfont{
          font-size:14px;
        }
      }
      input{
        padding-left:30px;
      }
      &-cancel{
        @include button;
        .iconfont{
          font-size:20px;
          position:relative;
          top:2px;
        }
      }
    }
    &search-fixed{
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      background: #fff;
      display: flex;
      width: 100%;
      flex-direction: column;
      z-index: 100;
    }
    &search-result{
      flex:1;
    }
  }
</style>
