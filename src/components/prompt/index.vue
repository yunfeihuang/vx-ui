<template>
  <confirm
    :class="classes"
    :open="open"
    :cancel="true"
    :cancel-text="cancelText"
    :confirm-text="confirmText"
    @close="handleClose"
    @confirm="handleConfirm"
    >
    <div v-if="title" :class="$cssPrefix + 'prompt-title'">{{title}}</div>
    <slot v-if="$slots.default"></slot>
    <template v-else>
      <password
        v-if="inputProps.type === 'password'"
        v-model="myValue"
        :clear="false"
        :class="$cssPrefix + 'prompt-input'"
        v-bind="inputProps"
        @input="handleInput"
      />
      <x-input
        v-else
        v-model="myValue"
        :clear="false"
        :class="$cssPrefix + 'prompt-input'"
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
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'prompt', this.disabled ? this.$cssPrefix + 'prompt-disabled' : '']
    }
  },
  data () {
    return {
      myValue: this.value
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
    }
  }
}
</script>
