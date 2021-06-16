<template>
  <div :class="['vx-grid']">
    <div class="vx-grid--inner" :style="`width: calc(100% + ${gutter}px);padding-top: ${gutter > 1 ? gutter : ''}px`">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { provide, ref, watch } from 'vue'
export default {
  name: 'VxGrid',
  props: {
    col: {
      type: Number,
      default: 2
    },
    gutter: {
      type: Number,
      default: 1
    }
  },
  setup (props) {
    let gutter = ref(props.gutter)
    watch(() => props.gutter, (value) => {
      gutter.value = value
    })
    let col = ref(props.col)
    watch(() => props.col, (value) => {
      col.value = value
    })
    provide('vxGrid', {
      gutter,
      col
    })
  }
}
</script>
