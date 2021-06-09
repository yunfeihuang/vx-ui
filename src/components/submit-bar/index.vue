<template>
  <div :class="['vx-submit-bar', {'is-sticky': props.sticky}, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <message type="error" v-if="props.tips || $slots['tips']">
      <slot name="tips" v-if="$slots['tips']"></slot>
      <template v-else>{{props.tips}}</template>
    </message>
    <div class="vx-submit-bar--inner"
      :class="{
        'vx-divider': !props.tips && !$slots['tips'],
        'is-buttons': !$slots['default'] || ($slots['button'] && $slots['button'].length > 1)
      }">
      <div class="vx-submit-bar--content" v-if="$slots['default']">
        <slot></slot>
      </div>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmitBar',
  componentName: 'SubmitBar',
  props: {
    tips: {
      type: String
    },
    sticky: {
      type: Boolean
    }
  }
}
</script>
