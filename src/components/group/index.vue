<template functional>
  <div :class="['vx-group', data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <div v-if="props.title" class="vx-group--title">{{props.title}}</div>
    <div class="vx-group--inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Group',
  componentName: 'Group',
  props: {
    title: {
      type: String
    }
  }
}
</script>
