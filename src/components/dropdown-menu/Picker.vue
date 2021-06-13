<template>
  <popup :class="['vx-dropdown-menu--picker', popupClass]" direction="top" :open="open" :history="false" v-bind="$attrs">
    <radio-group v-if="options" :value="value" @change="handleChange">
      <radio v-for="(item,index) in options"
        :value="item.value"
        :key="index">
        {{item.label}}
      </radio>
    </radio-group>
    <slot></slot>
  </popup>
</template>

<script>
import Popup from '../popup'
import {Radio, RadioGroup} from '../radio'
export default {
  components: {
    Popup,
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
  unmounted () {
    document.body.removeChild(this.$el)
  },
  methods: {
    handleChange (value) {
      this.$emit('update:modelValue', value)
      this.$emit('update:modelValue', value)
      this.$emit('change', value)
    }
  }
}
</script>
