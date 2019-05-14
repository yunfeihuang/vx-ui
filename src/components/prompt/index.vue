<template>
  <confirm
    :class="['vx-prompt', {'is-disabled': disabled}]"
    :open="open"
    :cancel="true"
    :cancel-text="cancelText"
    :confirm-text="confirmText"
    :title="title"
    @close="handleClose"
    @confirm="handleConfirm"
    @open="handleOpen"
    @after-close="handleAfterClose"
    >
    <div class="vx-prompt--message" v-if="message || $slots.message">
      <slot v-if="$slots.message" name="message"></slot>
      <template v-else>{{message}}</template>
    </div>
    <slot v-if="$slots.default"></slot>
    <template v-else>
      <password
        v-if="inputProps.type === 'password'"
        v-model="myValue"
        :clearable="false"
        :encrypt="encrypt"
        :cipher.sync="myCipher"
        class="vx-prompt--input"
        v-bind="inputProps"
        @input="handleInput"
        @keyup.enter.native="handleConfirm"/>
      <x-input
        v-else
        v-model="myValue"
        :clearable="false"
        class="vx-prompt--input"
        v-bind="inputProps"
        :native-type="inputProps.type"
        @input="handleInput"
        @keyup.enter.native="handleConfirm"/>
    </template>
  </confirm>
</template>

<script>
import Confirm from '../confirm'
import XInput from '../input'
import Password from '../password'
export default {
  componentName: 'Prompt',
  components: {
    Confirm,
    XInput,
    Password
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String
    },
    confirmText: {
      type: String
    },
    title: {
      type: String
    },
    inputProps: {
      type: Object,
      default () {
        return {}
      }
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
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
    autofocus: {
      type: Boolean
    },
    message: {
      type: String
    }
  },
  data () {
    return {
      myValue: this.value,
      myCipher: this.cipher
    }
  },
  watch: {
    value (value) {
      if (this.myValue !== value) {
        this.myValue = value
      }
    },
    myValue (value) {
      this.$emit('input', value)
    },
    myCipher (value) {
      this.$emit('update:cipher', value)
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:open', false).$emit('close')
    },
    handleConfirm () {
      this.open && !this.disabled && this.$emit('update:open', false).$emit('confirm', this.myValue).$emit('input', this.myValue)
    },
    handleInput (value) {
      this.$emit('change', value)
    },
    handleAfterClose () {
      this.$emit('after-close')
    },
    handleOpen () {
      if (this.autofocus) {
        this.$nextTick(() => {
          let node = this.$el.querySelector('input')
          node && node.focus()
        })
      }
    }
  }
}
</script>
