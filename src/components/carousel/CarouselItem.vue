<template>
  <div :class="$cssPrefix+'carousel-item'" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
export default {
  componentName: 'CarouselItem',
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    styles () {
      if (this.$parent.carouselMounted) {
        let active = this.$parent.isItemActive(this)
        if (this.$parent.isIE9()) {
          if (active) {
            let opacity = 0
            clearInterval(this.$interval)
            this.$interval = setInterval(() => { // eslint-disable-line
              opacity += 10
              this.$el.style.opacity = opacity / 100 // eslint-disable-line
              if (opacity >= 100) {
                clearInterval(this.$interval)
              }
            }, 32)
          } else {
            this.$el.style.opacity = 0 // eslint-disable-line
          }
          return {
            opacity: 0,
            zIndex: 0
          }
        } else {
          return {
            opacity: active ? 1 : 0,
            zIndex: active ? 1 : 0
          }
        }
      }
      return {}
    }
  }
}
</script>
