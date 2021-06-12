<template>
  <confirm
    :class="['vx-prompt']"
    :open="open"
    cancel
    :cancel-text="cancelText"
    :confirm-text="confirmText"
    :title="title"
    :confirm-props="{type: 'button', disabled: disabled}"
    @close="handleClose"
    @confirm="handleConfirm"
    @open="handleOpen"
    @after-close="handleAfterClose">
    <div class="vx-prompt--message" v-if="message || $slots.message">
      <slot v-if="$slots.message" name="message"></slot>
      <template v-else>{{message}}</template>
    </div>
    <slot v-if="$slots.default"></slot>
    <template v-else>
      <vx-password
        v-if="inputProps.type === 'password'"
        v-model="myValue"
        :clearable="false"
        :encrypt="encrypt"
        v-model:cipher="myCipher"
        class="vx-prompt--input"
        v-bind="inputProps"
        @input="handleInput"
        @keyup.enter="handleConfirm"/>
      <vx-input
        v-else
        v-model="myValue"
        :clearable="false"
        class="vx-prompt--input"
        v-bind="inputProps"
        :native-type="inputProps.type"
        @input="handleInput"
        @keyup.enter="handleConfirm"/>
    </template>
  </confirm>
</template>

<script>
import Confirm from '../confirm'
import VxInput from '../input'
import VxPassword from '../password'
export default {
  name: 'VxPrompt',
  components: {
    Confirm,
    VxInput,
    VxPassword
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
    modelValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean
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
      myValue: this.modelValue,
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
      this.$emit('update:modelValue', value)
    },
    myCipher (value) {
      this.$emit('update:cipher', value)
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:open', false)
      this.$emit('close')
    },
    handleConfirm () {
      this.open && !this.disabled && this.$emit('update:open', false) && this.$emit('confirm', this.myValue) && this.$emit('update:modelValue', this.myValue)
    },
    handleInput (value) {
      this.$emit('change', value);
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
