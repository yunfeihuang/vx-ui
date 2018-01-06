<template>
  <div :class="classes" >
    <div :class="['swiper-wrapper']" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'Marguee',
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
      default: 1500
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
      return [cssPrefix + 'marquee', 'swiper-container']
    }
  },
  mounted () {
    let options = Object.assign({
      initialSlide: this.active,
      direction: this.direction,
      autoplay: this.autoplay,
      loop: this.loop,
      onSlideChangeStart: (swiper) => {
        this.$emit('on-change', swiper.activeIndex).$emit('input', swiper.activeIndex)
      }
    }, this.options)
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
