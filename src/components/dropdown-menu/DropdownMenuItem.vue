<template>
  <div :class="['vx-dropdown-menu--item', {'is-checked': checked}]" @click.stop="handleClick">
    <div class="vx-dropdown-menu--item-text">
      {{myLabel}}<vx-arrow v-if="options || $slots['default']" :direction="open ? 'up' : 'down'" />
    </div>
  </div>
  <teleport to="body">
    <picker
      :style="style"
      v-model:open="open"
      :modelValue="modelValue"
      :options="options"
      :popupClass="popupClass"
      @update:modelValue="handleChange">
      <slot></slot>
    </picker>
  </teleport>
</template>

<script>
import Picker from './Picker'
import VxArrow from '../arrow'
import { computed, ref } from 'vue'

export default {
  name: 'VxDropdownMenuItem',
  components: {
    VxArrow,
    Picker
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
  setup (props, { emit, slots }) {
    const open = ref(null)
    const style = ref({})
    const myLabel = computed(() => {
      if (props.options) {
        let result = props.options.filter(item => item.value === props.modelValue)
        if (result && result[0] && result[0].label) {
          return result[0].label
        }
      }
      return props.label || props.placeholder
    })
    return {
      open,
      style,
      myLabel,
      handleClick (e) {
        if (props.options || slots['default']) {
          let rect = e.currentTarget.getBoundingClientRect()
          open.value = true
          style.value = {
            top: `${rect.bottom}px`,
            height:`${window.innerHeight - rect.bottom}px`
          }
        }
      },
      handleChange (value) {
        emit('update:modelValue', value)
        open.value = false
      },
      close () {
        open.value = false
      }
    }
  }
}
</script>
