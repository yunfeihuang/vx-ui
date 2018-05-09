<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'SwiperItem',
  computed: {
    classes () {
      return ['vx-swiper-item', 'swiper-slide']
    }
  }
}
</script>
