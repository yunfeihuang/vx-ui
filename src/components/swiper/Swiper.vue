<template>
  <div :class="classes" >
    <div :class="['swiper-wrapper']" >
      <slot></slot>
    </div>
    <slot name="pagination"></slot>
    <slot name="prev"></slot>
    <slot name="next"></slot>
    <slot name="scrollbar"></slot>
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
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'swiper', 'swiper-container']
    }
  },
  mounted () {
    let options = Object.assign({
      pagination: '.swiper-pagination',
      initialSlide: this.active,
      onSlideChangeStart: (swiper) => {
        this.$emit('on-change', swiper.activeIndex)
      }
    }, this.options)
    this.swiper = new Swiper(this.$el, options)
  },
  watch: {
    active (val) {
      this.swiper.activeIndex !== val && this.swiper.slideTo(val)
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
