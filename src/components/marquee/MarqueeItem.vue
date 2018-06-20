<template functional>
  <div :class="['vx-marquee-item', 'swiper-slide', data.staticClass]" :style="data.staticStyle" v-bind="data.attrs" v-on="listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'XMarqueeItem'
}
</script>
