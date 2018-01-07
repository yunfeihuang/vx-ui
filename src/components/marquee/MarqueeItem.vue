<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XMarqueeItem',
  computed: {
    classes () {
      return [this.$cssPrefix + 'marquee-item', 'swiper-slide']
    }
  }
}
</script>
