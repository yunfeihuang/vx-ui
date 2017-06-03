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
import { cssPrefix } from 'utils/variable.js'
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.min.css'
export default {
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
      default: false
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
      return [cssPrefix + 'swiper', 'swiper-container']
    }
  },
  mounted () {
    let options = Object.assign({
      initialSlide: this.active,
      onSlideChangeStart: (swiper) => {
        this.$emit('on-change', swiper.activeIndex)
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
    this.swiper = new Swiper(this.$el, options)
  },
  watch: {
    active (value) {
      this.swiper.activeIndex !== value && this.swiper.slideTo(value)
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    getSwiper () {
      return this.swiper
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &swiper{
      .swiper-pagination-bullet{
        background-color:#fff;
        margin: 0 4px!important;
        box-shadow:0 0 3px rgba(0,0,0,0.2);
        opacity:0.4;
      }
      .swiper-pagination-bullet-active{
        opacity:1;
      }
    }
  }
</style>
