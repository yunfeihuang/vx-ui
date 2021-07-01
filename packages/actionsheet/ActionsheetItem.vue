<template>
  <div 
    :class="['vx-actionsheet--item',{'is-disabled': disabled}]"
    @click="handleClick">
    <div class="vx-actionsheet--item-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'VxActionsheetItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const vxActionsheet = inject('vxActionsheet')
    return {
      handleClick () {
        vxActionsheet.change(props.value)
      }
    }
  }
}
</script>
