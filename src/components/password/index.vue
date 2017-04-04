<template>
  <div :class="_clas" :style="style">
    <x-input
      :htmlType="hType"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="value"
      :disabled="disabled" 
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :name="name" 
      :clear="false"
      :required="required"
      @on-focus="focusHandler"
      @on-blur="blurHandler"
      @on-keyup="keyupHandler"
      @on-keydown="keydownHandler" 
      @on-change="changeHandler"
    />
    <button :class="[cssPrefix+'password-switch',this.hType!=='password'?'disabled':'']" type="button" @click="switchHandler"></button>
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
      return [cssPrefix + 'password', this.clas]
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      hType: 'password'
    }
  },
  methods: {
    changeHandler (value) {
      this.$emit('on-change', value)
    },
    switchHandler () {
      this.hType = this.hType === 'password' ? 'text' : 'password'
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &password{
      position:relative;
      label{
        position:static;
      }
      &-switch{
        position:absolute;
        right:0;
        top:0;
        @include button;
        background:url('../../images/eye-close.svg') no-repeat center #fff;
        -webkit-background-size: 20px;
        background-size: 20px;
        width:40px;
        height:100%;
        opacity:0.6;
      }
      &-switch.disabled{
        background-image:url('../../images/eye-open.svg');
        -webkit-background-size: 22px;
        background-size: 22px;
      }
    }
  }
</style>
