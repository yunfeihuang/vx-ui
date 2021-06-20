<template>
  <vx-popup :class="['vx-dropdown-menu--picker', popupClass]" direction="top" :open="open" :history="false" v-bind="$attrs">
    <radio-group v-if="options" :modelValue="modelValue" @update:modelValue="handleChange">
      <radio v-for="(item,index) in options"
        :value="item.value"
        :key="index">
        {{item.label}}
      </radio>
    </radio-group>
    <slot></slot>
  </vx-popup>
</template>

<script>
import VxPopup from '../popup'
import {Radio, RadioGroup} from '../radio'
export default {
  components: {
    VxPopup,
    Radio,
    RadioGroup
  },
  props: {
    open: {
      type: Boolean
    },
    options: {
      type: Array
    },
    modelValue: {
      type: [String, Number]
    },
    popupClass: {
      type: [String, Array, Object]
    }
  },
  setup (props, { emit }) {
    return {
      handleChange (value) {
        emit('update:modelValue', value)
      }
    }
  }
}
</script>
