<template>
  <x-input
    class="vx-password"
    v-bind="$props"
    :clear="false"
    :encrypt="null"
    :icons="null"
    :nativeType="myNativeType"
    @change="handleChange"
    @input="handleInput"
  >
    <slot name="prepend" slot="prepend"></slot>
    <slot v-if="$slots.append" name="append" slot="append"></slot>
    <button v-else slot="append"
      tabindex="-2"
      class="vx-password--switch"
      type="button"
      @click="handleSwitch"
    >
      <i v-if="myNativeType!=='text'" v-html="icons[0]"></i>
      <i v-else v-html="icons[1]"></i>
    </button>
  </x-input>
</template>

<script>
import { input } from 'utils/mixins'
import XInput from '../input'
export default {
  componentName: 'Password',
  mixins: [input],
  props: {
    ...input.props,
    nativeType: {
      type: String,
      default: 'password'
    },
    autocomplete: {
      type: String,
      default: 'new-password'
    },
    encrypt: {
      type: Function,
      default1 (value, next) {
        next(value.toUpperCase())
      }
    },
    cipher: {
      type: String
    },
    icons: {
      type: Array,
      default () {
        return [
          '<span class="vx-password--pwd-icon"></span>',
          '<span class="vx-password--text-icon">abc</span>'
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
    },
    value (value) {
      if (this.encrypt) {
        let self = this
        let next = (v) => {
          self.$emit('update:cipher', v)
        }
        this.encrypt(value, next)
      }
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
