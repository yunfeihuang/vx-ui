<template>
  <div :class="['vx-submit-bar', {'is-sticky': sticky}]"
    v-bind="$attrs">
    <vx-message type="error" v-if="tips || $slots['tips']">
      <slot name="tips" v-if="$slots['tips']"></slot>
      <template v-else>{{tips}}</template>
    </vx-message>
    <div class="vx-submit-bar--inner"
      :class="{
        'vx-divider': !tips && !$slots['tips'],
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
  name: 'VxSubmitBar',
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
