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
      <vx-cascader-popup-picker
        :options="options"
        v-model:open="open"
        v-model:label="label"
        v-model="value"
        @close="handleClose"
        @update:modelValue="handleChange"/>
    </teleport>
  </div>
</template>

<script>
import VxCascaderPopupPicker from '../cascader-popup-picker'
import { input } from '@/utils/mixins'
import VxArrow from '../arrow'
import { watch, ref } from 'vue'

export default {
  name: 'VxCascader',
  components: {
    VxArrow,
    VxCascaderPopupPicker
  },
  props: {
    ...input.props,
    modelValue: VxCascaderPopupPicker.props.modelValue,
    options: VxCascaderPopupPicker.props.options,
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
        value.value = [...props.modelValue]
        open.value = true
      },
      handleChange (value) {
        open.value = true
        emit('update:modelValue', value)
      },
      handleClose () {
        open.value = true
      }
    }
  }
}

</script>
