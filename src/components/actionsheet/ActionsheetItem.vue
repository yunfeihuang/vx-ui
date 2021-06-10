<template>
  <div :class="['vx-actionsheet--item',{'is-disabled':disabled}]"
    :data-value="value"
    v-bind="$attrs">
    <div class="vx-actionsheet--item-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>
