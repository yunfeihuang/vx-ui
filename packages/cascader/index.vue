<template>
  <div :class="['vx-cascader']" @focusin="handleFocusIn">
    <div class="vx-cascader--inner">
      <slot name="prepend"></slot>
      <div>
        <button type="button" :data-placeholder="placeholder">{{label.join(separator)}}</button>
      </div>
      <vx-arrow v-if="arrow && !$slots.append" v-bind="arrowProps" direction="down"/>
      <slot name="append"></slot>
    </div>
    <teleport to="body">
      <vx-cascader-picker
        v-model:open="open"
        :options="options"
        :label="label"
        :modelValue="value"
        @update:modelValue="handleChange"
        @update:label="handleLabel" />
    </teleport>
  </div>
</template>

<script>
import VxCascaderPicker from '../cascader-picker'
import { input } from '@/utils/mixins'
import VxArrow from '../arrow'
import { watch, ref } from 'vue'

export default {
  name: 'VxCascader',
  components: {
    VxArrow,
    VxCascaderPicker
  },
  props: {
    ...input.props,
    modelValue: VxCascaderPicker.props.modelValue,
    options: VxCascaderPicker.props.options,
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: {
      type: Boolean
    },
    separator: {
      type: String,
      default: '/'
    },
    arrow: {
      type: Boolean,
      default: true
    },
    history: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { emit }) {
    const value = ref(props.modelValue)
    watch(() => props.modelValue, val => {
      value.value = val
    })
    const label = ref([])
    const open = ref(false)
    return {
      value,
      label,
      open,
      handleFocusIn () {
        open.value = true
      },
      handleChange (value) {
        open.value = false
        emit('update:modelValue', value)
      },
      handleLabel (val) {
        label.value = val
      }
    }
  }
}

</script>
