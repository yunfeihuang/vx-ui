<template>
  <vx-confirm
    :class="['vx-prompt']"
    :open="open"
    cancel
    :cancel-text="cancelText"
    :confirm-text="confirmText"
    :title="title"
    :confirm-props="{type: 'button', disabled: disabled}"
    @close="handleClose"
    @confirm="handleConfirm"
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
        @update:cipher="handleCipher"
        @update:modelValue="handleInput"
        @keyup.enter="handleConfirm"/>
      <vx-input
        v-else
        v-model="myValue"
        :clearable="false"
        class="vx-prompt--input"
        v-bind="inputProps"
        :native-type="inputProps.type"
        @update:modelValue="handleInput"
        @keyup.enter="handleConfirm"/>
    </template>
  </vx-confirm>
</template>

<script>
import { ref } from '@vue/reactivity'
import VxConfirm from '../confirm'
import VxInput from '../input'
import VxPassword from '../password'
import { watch } from '@vue/runtime-core'
export default {
  name: 'VxPrompt',
  components: {
    VxConfirm,
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
      default1 (value, next) {
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
  setup (props, { emit }) {
    const myValue = ref(props.modelValue)
    const myCipher = ref(props.cipher)
    watch(() => props.modelValue, val => {
      myValue.value = val
    })
    return {
      myValue,
      myCipher,
      handleClose () {
        emit('update:open', false)
        emit('close')
      },
      handleConfirm () {
        if (props.open && !props.disabled) {
          emit('update:open', false)
          emit('confirm', myValue.value)
        }
      },
      handleInput (value) {
        emit('update:modelValue', value)
      },
      handleAfterClose () {
        emit('after-close')
      },
      handleCipher (value) {
        emit('update:cipher', value)
      }
    }
  }
}
</script>
