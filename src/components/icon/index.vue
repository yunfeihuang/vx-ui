<template functional>
  <i :class="['vx-iconfont', data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'Icon',
  componentName: 'Icon'
}
</script>
