<template>
  <div class="vx-password">
    <x-input
      :native-type="myNativeType"
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
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup="handleKeyup"
      @keydown="handleKeydown"
      @change="handleChange"
      @input="handleInput"
      @invalid="handleInvalid"
    />
    <button
      class="vx-password-switch"
      type="button"
      @click="handleSwitch"
    >
      <i v-if="myNativeType==='password'" v-html="icons[0]"></i>
      <i v-if="myNativeType==='text'" v-html="icons[1]"></i>
    </button>
  </div>
</template>

<script>
import { input } from 'utils/mixins'
import XInput from '../input'
import Icon from '../icon'
export default {
  componentName: 'Password',
  mixins: [input],
  props: {
    nativeType: {
      type: String,
      default: 'password'
    },
    icons: {
      type: String,
      default () {
        return [
          '<span class="vx-password-text-icon">abc</span>',
          '<span class="vx-password-pwd-icon"></span>'
        ]
      }
    }
  },
  components: {
    XInput
  },
  watch: {
    nativeType (value) {
      this.myNativeType = value
    }
  },
  data () {
    return {
      myNativeType: this.nativeType
    }
  },
  methods: {
    handleChange (value) {
      this.$emit('change', value)
    },
    handleSwitch () {
      this.myNativeType = this.myNativeType === 'password' ? 'text' : 'password'
    }
  }
}
</script>
