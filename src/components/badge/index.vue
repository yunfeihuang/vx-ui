<template functional>
  <span :class="['vx-badge', {'vx-badge-dot': props.text === ''}, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
      <span v-if="typeof props.text === 'number' && props.max && props.text > props.max" class="badge-ellipsis"></span>
      <template v-else>
        {{props.text}}
      </template>
    </span>
</template>

<script>
export default {
  componentName: 'Badge',
  props: {
    text: {
      type: [String, Number],
      default: ''
    },
    max: {
      type: Number,
      default: 9
    }
  }
}
</script>
