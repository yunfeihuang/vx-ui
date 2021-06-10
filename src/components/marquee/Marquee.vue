<template>
  <div :class="['vx-marquee', 'swiper-container']" >
    <div class="swiper-wrapper" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VxMarquee',
  props: {
    active: {
      type: Number,
      default: 0
    },
    options: {
      type: Object
    },
    direction: {
      type: String,
      default: 'vertical'
    },
    autoplay: {
      type: Number,
      default: 2000
    },
    effect: {
      type: String,
      default: 'slide'
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    import('swiper/dist/css/swiper.min.css')
    import('swiper').then(Swiper => {
      let options = Object.assign({
        initialSlide: this.active,
        direction: this.direction,
        autoplay: this.autoplay,
        loop: this.loop,
        autoplayDisableOnInteraction: false,
        onSlideChangeStart: (swiper) => {
          this.$emit('input', swiper.activeIndex).$emit('change', swiper.activeIndex)
        }
      }, this.options)
      this.$$swiper = new Swiper(this.$el, options)
    })
  },
  watch: {
    active (value) {
      this.$$swiper.activeIndex !== value && this.$$swiper.slideTo(value)
    }
  },
  methods: {
    getSwiper () {
      return this.$$swiper
    }
  }
}
</script>
