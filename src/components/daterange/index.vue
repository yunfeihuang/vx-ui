<template>
  <vx-input
    v-bind="$props"
    v-on="$attrs"
    arrow
    :modelValue="label"
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
      :modelValue="value"
      :format="format"
      @close="open = false"
      @update:modelValue="handleChange"/>
  </teleport>
</template>

<script>
import { input } from '@/utils/mixins'
import VxDaterangePicker from '../daterange-picker'
import VxInput from '../input'
import { computed, ref, watch } from 'vue'

export default {
  name: 'VxDaterange',
  components: {
    VxInput,
    VxDaterangePicker
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
  setup (props, { emit }) {
    const value = ref(props.modelValue)
    watch(() => props.modelValue, val => {
      value.value = val
    })
    const label = computed(() => {
      if (value.value && value.value[0] && value.value[1]) {
        return value.value[0].format() + props.separator + value.value[1].format()
      }
      return '' 
    })
    const open = ref(false)
    return {
      value,
      open,
      label,
      handleFocusIn () {
        open.value = true
      },
      handleChange (value) {
        emit('update:modelValue', value)
      }
    }
  }
}
</script>

