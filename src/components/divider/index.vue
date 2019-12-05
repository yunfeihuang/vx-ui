<template functional>
  <div :class="['vx-divider', {'is-vertical': props.vertical}, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <div v-if="props.title || $slots['title']" class="vx-divider--title vx-line-clamp-1">
      <slot name="title" v-if="$slots['title']"></slot>
      <template v-else-if="props.title">
        {{props.title}}
      </template>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Divider',
  componentName: 'Divider',
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
