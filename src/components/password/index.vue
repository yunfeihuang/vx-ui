<template>
  <div :class="classes" :style="styles">
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
    <button
      :class="[cssPrefix+'password-switch']"
      type="button"
      @click="switchHandler"
    >
      <i v-if="this.hType==='password'" class="iconfont">&#xe602;</i>
      <i v-if="this.hType==='text'" class="iconfont">&#xe63b;</i>
    </button>
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
    classes () {
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
        width:40px;
        height:100%;
        .iconfont{
          font-size:20px;
          color:#666;
        }
      }
    }
  }
</style>
