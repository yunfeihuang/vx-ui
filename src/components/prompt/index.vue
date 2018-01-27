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
        v-if="inputProps.type === 'password'"
        v-model="myValue"
        :clear="false"
        :class="$cssPrefix + 'prompt-input'"
        v-bind="inputProps"
        @input="inputHandler"
      />
      <x-input
        v-else
        v-model="myValue"
        :clear="false"
        :class="$cssPrefix + 'prompt-input'"
        v-bind="inputProps"
        :native-type="inputProps.type"
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
    closeHandler () {
      this.$emit('update:open', false).$emit('on-close')
    },
    confirmHandler () {
      this.open && this.$emit('update:open', false).$emit('on-confirm', this.myValue).$emit('input', this.myValue)
    },
    inputHandler (value) {
      this.$emit('on-change', value)
    }
  }
}
</script>
