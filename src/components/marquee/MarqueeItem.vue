<template functional>
  <div :class="['vx-marquee-item', 'swiper-slide', data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XMarqueeItem',
  componentName: 'XMarqueeItem'
}
</script>
