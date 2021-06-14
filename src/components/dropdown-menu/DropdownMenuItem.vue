<template>
  <div :class="['vx-dropdown-menu--item', {'is-checked': checked}]" @click.stop="handleClick">
    <div class="vx-dropdown-menu--item-text">
      {{myLabel}}<vx-arrow v-if="options || $slots['default']" :direction="open ? 'up' : 'down'" />
    </div>
  </div>
  <teleport to="body">
    <vx-picker
      :style="style"
      v-model:open="open"
      :modelValue="value"
      :options="options"
      :popupClass="popupClass"
      @update:modelValue="handleChange">
      <slot></slot>
    </vx-picker>
  </teleport>
</template>

<script>
import VxPicker from './Picker'
import VxArrow from '../arrow'

export default {
  name: 'VxDropdownMenuItem',
  components: {
    VxArrow,
    VxPicker
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    label: {
      type: String
    },
    options: {
      type: Array
    },
    modelValue: {
      type: [String, Number]
    },
    checked: {
      type: Boolean
    },
    popupClass: {
      type: [String, Array, Object]
    }
  },
  computed: {
    myLabel () {
      if (this.options) {
        let result = this.options.filter(item => item.value === this.modelValue)
        if (result && result[0] && result[0].label) {
          return result[0].label
        }
      }
      return this.label || this.placeholder
    }
  },
  data () {
    return {
      open: false,
      style: {}
    }
  },
  methods: {
    handleClick (e) {
      if (this.options || this.$slots['default']) {
        let rect = e.currentTarget.getBoundingClientRect()
        this.open = true
        this.style = {
          top: `${rect.bottom}px`,
          height:`${window.innerHeight - rect.bottom}px`
        }
      }
    },
    handleChange (value) {
      this.$emit('update:modelValue', value)
      this.open = false
    },
    close () {
      this.open = false
    }
  }
}
</script>
