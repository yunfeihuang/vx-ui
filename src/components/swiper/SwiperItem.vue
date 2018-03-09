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
      return [this.$cssPrefix + 'swiper-item', 'swiper-slide']
    }
  }
}
</script>
