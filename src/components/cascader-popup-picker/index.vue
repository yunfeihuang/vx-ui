<template>
  <popup :open="open" :history="history" @close="handleClose" :fast-close="true" :openRefreshRender="false" :class="['vx-cascader-popup-picker-wrapper']">
    <div :class="classes">
      <cascader-picker v-bind="$props" @change="handleChange" @update:label="handleLabel" />
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
import CascaderPicker from '../cascader-picker'

export default {
  componentName: 'CascaderPopupPicker',
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
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    classes () {
      return ['vx-cascader-popup-picker']
    }
  },
  methods: {
    handleClose () {
      this.$emit('close').$emit('update:open', false)
    },
    handleChange (value) {
      this.$emit('input', value).$emit('change', value)
      this.handleClose()
    },
    handleLabel (label) {
      this.$emit('update:label', label)
    }
  }
}
</script>
