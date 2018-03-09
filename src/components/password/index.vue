<template>
  <div :class="classes">
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
      :class="[$cssPrefix+'password-switch']"
      type="button"
      @click="handleSwitch"
    >
      <icon v-if="this.myNativeType==='password'">&#xe602;</icon>
      <icon v-if="this.myNativeType==='text'">&#xe63b;</icon>
    </button>
  </div>
</template>

<script>
import { input } from 'utils/mixins.js'
import XInput from '../input'
import Icon from '../icon'
export default {
  componentName: 'Password',
  mixins: [input],
  props: {
    nativeType: {
      type: String,
      default: 'password'
    }
  },
  components: {
    XInput,
    Icon
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'password']
    }
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
