<template>
  <div :class="classes">
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
      @input="inputHandler"
      @invalid="invalidHandler"
    />
    <button
      :class="[cssPrefix+'password-switch']"
      type="button"
      @click="switchHandler"
    >
      <icon v-if="this.hType==='password'">&#xe602;</icon>
      <icon v-if="this.hType==='text'">&#xe63b;</icon>
    </button>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { input } from 'utils/mixins.js'
import XInput from '../input'
import Icon from '../icon'
export default {
  mixins: [input],
  components: {
    XInput,
    Icon
  },
  computed: {
    classes () {
      return [cssPrefix + 'password']
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
      input{
        padding-right:40px;
      }
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
        .#{$css-prefix}iconfont{
          font-size:20px;
          color:#666;
        }
      }
    }
  }
</style>
