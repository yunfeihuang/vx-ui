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
    @close-after="handleCloseAfter"
    >
    <div class="vx-prompt--message" v-if="$slots.message">
      <slot name="message"></slot>
    </div>
    <slot v-if="$slots.default"></slot>
    <template v-else>
      <password
        v-if="inputProps.type === 'password'"
        v-model="myValue"
        :clear="false"
        :encrypt="encrypt"
        :cipher.sync="myCipher"
        class="vx-prompt--input"
        v-bind="inputProps"
        @input="handleInput"
      />
      <x-input
        v-else
        v-model="myValue"
        :clear="false"
        class="vx-prompt--input"
        v-bind="inputProps"
        :native-type="inputProps.type"
        @input="handleInput"/>
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
      this.open && this.$emit('update:open', false).$emit('confirm', this.myValue).$emit('input', this.myValue)
    },
    handleInput (value) {
      this.$emit('change', value)
    },
    handleCloseAfter () {
      this.$emit('close-after')
    }
  }
}
</script>
