<template>
  <div :class="['vx-divider', {'is-vertical': vertical}]" v-bind="$attrs" v-on="$attrs">
    <div v-if="title || $slots['title']" class="vx-divider--title vx-line-clamp-1">
      <slot name="title" v-if="$slots['title']"></slot>
      <template v-else-if="title">
        {{title}}
      </template>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VxDivider',
  props: {
    vertical: {
      type: Boolean
    },
    title: {
      type: String
    }
  }
}
</script>
