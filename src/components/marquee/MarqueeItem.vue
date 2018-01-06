<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MargueeItem',
  computed: {
    classes () {
      return [this.$cssPrefix + 'marquee-item', 'swiper-slide']
    }
  }
}
</script>
