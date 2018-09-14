<template functional>
  <component :is="props.remtopx"
    :height="props.size"
    :width="props.size"
    :class="['vx-spinner--wrapper', data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
      <div class="vx-spinner" :style="`border-color: ${props.primaryColor} ${props.color} ${props.color} ${props.color}`"></div>
      <slot></slot>
  </component>
</template>

<script>
import RemToPx from '../remtopx'
export default {
  componentName: 'Spinner',
  props: {
    color: {
      type: String,
      default: '#eee'
    },
    primaryColor: {
      type: String,
      default: '#3399ff'
    },
    size: {
      type: Number,
      default: 0.4
    },
    remtopx: {
      type: Object,
      default () {
        return RemToPx
      }
    }
  }
}
</script>
