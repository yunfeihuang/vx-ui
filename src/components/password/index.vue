<template>
  <div :class="classes">
    <x-input
      :native-type="hType"
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
      @on-focus="handleFocus"
      @on-blur="handleBlur"
      @on-keyup="handleKeyup"
      @on-keydown="handleKeydown" 
      @on-change="handleChange"
      @input="handleInput"
      @invalid="handleInvalid"
    />
    <button
      :class="[$cssPrefix+'password-switch']"
      type="button"
      @click="handleSwitch"
    >
      <icon v-if="this.hType==='password'">&#xe602;</icon>
      <icon v-if="this.hType==='text'">&#xe63b;</icon>
    </button>
  </div>
</template>

<script>
import { input } from 'utils/mixins.js'
import XInput from '../input'
import Icon from '../icon'
export default {
  name: 'Password',
  mixins: [input],
  components: {
    XInput,
    Icon
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'password']
    }
  },
  data () {
    return {
      hType: 'password'
    }
  },
  methods: {
    handleChange (value) {
      this.$emit('on-change', value)
    },
    handleSwitch () {
      this.hType = this.hType === 'password' ? 'text' : 'password'
    }
  }
}
</script>
