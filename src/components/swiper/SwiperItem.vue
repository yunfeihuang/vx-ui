<template functional>
  <div :class="['vx-swiper-item', 'swiper-slide', data.class, data.staticClass]"  :style="data.style" v-bind="data.attrs" v-on="listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'SwiperItem'
}
</script>
