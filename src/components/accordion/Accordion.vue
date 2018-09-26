<template functional>
  <div :class="['vx-accordion', data.staticClass, data.class]"
    :data-mutex="props.mutex===true?'true':''"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Accordion',
  props: {
    mutex: {
      type: Boolean,
      default: true
    }
  }
}
</script>
