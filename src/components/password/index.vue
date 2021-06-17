<template>
  <vx-input
    class="vx-password"
    v-bind="$props"
    :clearable="false"
    :encrypt="null"
    :icons="null"
    :nativeType="myNativeType"
    @update:modelValue="handleChange"
  >
    <template v-slot:prepend><slot name="prepend"></slot></template>
    <template v-if="$slots.append" v-slot:append><slot name="append" ></slot></template>
    <template v-else v-slot:append>
      <button
        tabindex="-2"
        class="vx-password--switch"
        type="button"
        @click="handleSwitch"
      >
        <i v-if="myNativeType!=='text'" v-html="icons[0]"></i>
        <i v-else v-html="icons[1]"></i>
      </button>
    </template>
  </vx-input>
</template>

<script>
import { input } from '@/utils/mixins'
import VxInput from '../input'
export default {
  name: 'VxPassword',
  components: {
    VxInput
  },
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
      default (value, next) {
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
  watch: {
    nativeType (value) {
      this.myNativeType = value
    },
    modelValue (value) {
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
      console.log('handleChange', value)
      this.$emit('change', value)
      this.$emit('update:modelValue', value)
    },
    handleSwitch () {
      this.myNativeType = this.myNativeType === 'password' ? 'text' : 'password'
    }
  }
}
</script>
