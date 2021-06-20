<template>
  <vx-input
    v-bind="$props"
    v-on="$attrs"
    :type="nativeType"
    arrow
    readonly="readonly"
    v-model="value"
    @focusin="handleFocusIn"
    @update:modelValue="handleChange"
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
      :modelValue="value"
      :format="format"
      @close="open = false"
      @update:modelValue="handlePickerChange"/>
  </teleport>
</template>

<script>
import { input } from '@/utils/mixins'
import VxInput from '../input'
import VxDatetimePicker from '../datetime-picker'
import { ref, watch } from 'vue'
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
  setup (props, { emit }) {
    const value = ref(props.modelValue)
    watch(() => props.modelValue, val => {
      value.value = val
    })
    const open = ref(false)
    return {
      value,
      open,
      handleFocusIn () {
        open.value = true
      },
      handleChange (value) {
        emit('update:modelValue', value)
      },
      handlePickerChange (val) {
        value.value = val
      }
    }
  }
}
</script>

