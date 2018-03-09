<template>
  <div :class="classes" >
    <div :class="['swiper-wrapper']" >
      <slot></slot>
    </div>
    <div v-if="pagination" class="swiper-pagination"></div>
    <div v-if="prev" class="swiper-button-prev"></div>
    <div v-if="next" class="swiper-button-next"></div>
    <div v-if="scrollbar" class="swiper-scrollbar"></div>
  </div>
</template>

<script>
export default {
  componentName: 'Swiper',
  props: {
    active: {
      type: Number,
      default: 0
    },
    options: {
      type: Object
    },
    pagination: {
      type: Boolean,
      default: true
    },
    prev: {
      type: Boolean,
      default: false
    },
    next: {
      type: Boolean,
      default: false
    },
    scrollbar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'swiper', 'swiper-container']
    }
  },
  mounted () {
    require.ensure([], (r) => {
      let Swiper = require('swiper/dist/js/swiper.min.js')
      require('swiper/dist/css/swiper.min.css')
      let options = Object.assign({
        initialSlide: this.active,
        onSlideChangeStart: (swiper) => {
          this.$emit('change', swiper.activeIndex).$emit('update:active', swiper.activeIndex)
        }
      }, this.options)
      if (this.pagination) {
        options.pagination = '.swiper-pagination'
      }
      if (this.prev) {
        options.prev = '.swiper-button-prev'
      }
      if (this.next) {
        options.nextButton = '.swiper-button-prev'
      }
      if (this.scrollbar) {
        options.scrollbar = '.swiper-scrollbar'
      }
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
