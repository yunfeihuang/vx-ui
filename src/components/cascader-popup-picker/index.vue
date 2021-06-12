<template>
  <popup :open="open" :history="history" @close="handleClose" fast-close class="vx-cascader-popup-picker--wrapper">
    <div class="vx-cascader-popup-picker">
      <cascader-picker v-bind="$props" @change="handleChange" @update:label="handleLabel" />
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
import CascaderPicker from '../cascader-picker'

export default {
  name: 'VxCascaderPopupPicker',
  components: {
    Popup,
    CascaderPicker
  },
  props: {
    ...CascaderPicker.props,
    open: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
      this.$emit('update:open', false)
    },
    handleChange (value) {
      this.$emit('update:modelValue', value)
      this.$emit('change', value)
      this.handleClose()
    },
    handleLabel (label) {
      this.$emit('update:label', label)
    }
  }
}
</script>
