<template functional>
  <div :class="['vx-actionsheet-item',{'is-disabled':props.disabled}, data.class, data.staticClass]" :style="data.style" :data-value="props.value">
    <div class="vx-actionsheet-item-text" :disabled="props.disabled">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  componentName: 'ActionsheetItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>
