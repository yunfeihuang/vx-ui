<template>
  <confirm
    :class="classes"
    :open="open"
    :cancel="true"
    :cancel-text="cancelText"
    :confirm-text="confirmText"
    @on-close="closeHandler"
    @on-confirm="confirmHandler"
    >
    <div v-if="title" :class="$cssPrefix + 'prompt-title'">{{title}}</div>
    <slot v-if="$slots.default"></slot>
    <template v-else>
      <password
        v-if="input.type === 'password'"
        v-model="myValue"
        :clear="false"
        :class="$cssPrefix + 'prompt-input'"
        :placeholder="input.placeholder"
        @input="inputHandler"
      />
      <x-input
        v-else
        v-model="myValue"
        :clear="false"
        :class="$cssPrefix + 'prompt-input'"
        :htmlType="input.type"
        :placeholder="input.placeholder"
        @input="inputHandler"/>
    </template>
  </confirm>
</template>

<script>
import Confirm from '../confirm'
import XInput from '../input'
import Password from '../password'
export default {
  name: 'Prompt',
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
    input: {
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
    closeHandler () {
      this.$emit('on-close')
    },
    confirmHandler () {
      this.open && this.$emit('on-confirm', this.myValue).$emit('input', this.myValue)
    },
    inputHandler (value) {
      this.$emit('on-change', value)
    }
  }
}
</script>
