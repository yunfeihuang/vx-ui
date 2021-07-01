<template>
  <div :class="['vx-swiper--item', 'swiper-slide']"
    v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VxSwiperItem',
}
</script>
