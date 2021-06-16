<template>
  <vx-input
    :class="{'is-focus': isFocus}"
    v-bind="$$props"
    v-on="$$props"
    :type="nativeType"
    arrow
    readonly="readonly"
    @focusin="handleFocusIn"
    >
    <template v-slot:prepend>
      <slot name="prepend"></slot>
    </template>
    <template v-slot:append>
      <slot name="append"></slot>
    </template>
  </vx-input>
  <teleport to="body">
    <vx-datetime-picker
      v-model:open="open"
      v-model="value"
      :format="format"
      @close="open = false"
      @update:modelValue="handleChange"/>
  </teleport>
</template>

<script>
import { input } from '@/utils/mixins'
import VxInput from '../input'
import VxDatetimePicker from '../datetime-picker'
export default {
  name: 'VxDatetime',
  components: {
    VxInput,
    VxDatetimePicker
  },
  props: {
    ...input.props,
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    getPopupMounted: {
      type: Function
    }
  },
  computed: {
    $$props () {
      return {
        ...this.$props,
        ...this.$attrs
      }
    },
    $$listeners () {
      return {
        ...this.$attrs,
        'update:modelValue': this.handleChange
      }
    }
  },
  data () {
    return {
      open: false,
      value: this.modelValue
    }
  },
  methods: {
    handleFocusIn () {
      this.value = this.modelValue,
      this.open = true
    },
    handleChange () {
      this.$emit('update:modelValue', this.value)
    }
  }
}
</script>

