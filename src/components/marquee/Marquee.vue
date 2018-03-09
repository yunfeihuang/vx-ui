<template>
  <div :class="classes" >
    <div :class="['swiper-wrapper']" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  componentName: 'XMarquee',
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
  computed: {
    classes () {
      return [this.$cssPrefix + 'marquee', 'swiper-container']
    }
  },
  mounted () {
    require.ensure([], (r) => {
      let Swiper = require('swiper/dist/js/swiper.min.js')
      require('swiper/dist/css/swiper.min.css')
      let options = Object.assign({
        initialSlide: this.active,
        direction: this.direction,
        autoplay: this.autoplay,
        loop: this.loop,
        onSlideChangeStart: (swiper) => {
          this.$emit('change', swiper.activeIndex).$emit('input', swiper.activeIndex)
        }
      }, this.options)
      this.$swiper = new Swiper(this.$el, options)
    })
  },
  watch: {
    active (value) {
      this.$swiper.activeIndex !== value && this.$swiper.slideTo(value)
    }
  },
  methods: {
    getSwiper () {
      return this.$swiper
    }
  }
}
</script>
