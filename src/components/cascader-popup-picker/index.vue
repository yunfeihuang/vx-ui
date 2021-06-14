<template>
  <vx-popup :open="open" :history="history" @close="handleClose" fast-close class="vx-cascader-popup-picker--wrapper">
    <div class="vx-cascader-popup-picker">
      <vx-cascader-picker v-bind="$props" @update:modelValue="handleChange" @update:label="handleLabel" />
    </div>
  </vx-popup>
</template>

<script>
import VxPopup from '../popup'
import VxCascaderPicker from '../cascader-picker'

export default {
  name: 'VxCascaderPopupPicker',
  components: {
    VxPopup,
    VxCascaderPicker
  },
  props: {
    ...VxCascaderPicker.props,
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
      this.handleClose()
    },
    handleLabel (label) {
      this.$emit('update:label', label)
    }
  }
}
</script>
