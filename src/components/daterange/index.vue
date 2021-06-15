<template>
  <vx-input
    v-bind="$$props"
    v-on="$$listeners"
    arrow
    :value="myValue"
    :type="nativeType"
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
    <vx-daterange-picker
      v-model:open="open"
      v-model="value"
      :format="format"
      @close="open = false"
      @update:modelValue="handleChange"/>
  </teleport>
</template>

<script>
import { input } from '@/utils/mixins'
import VxDaterangePicker from '../daterange-picker'
import VxInput from '../input'

export default {
  name: 'VxDaterange',
  components: {
    VxInput,
    VxDaterangePicker
  },
  mixins: [input],
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
    modelValue: {
      type: Array,
      default () {
        return []
      }
    },
    separator: {
      type: String,
      default: ' ~ '
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
    myValue () {
      if (this.modelValue && this.modelValue[0] && this.modelValue[1]) {
        return this.modelValue[0].format() + this.separator + this.modelValue[1].format()
      }
      return ''
    },
    $$props () {
      return {
        ...this.$props,
        ...this.$attrs
      }
    },
    $$listeners () {
      return {
        ...this.$attrs,
        change: this.handleChange,
        input: this.handleInput
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

