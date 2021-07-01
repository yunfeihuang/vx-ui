<template>
  <div :class="['vx-marquee-item', 'swiper-slide']"
    v-bind="$attrs"
    v-on="$attrs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VxMarqueeItem'
}
</script>
