<template>
  <div ref="el" :class="['vx-marquee', 'swiper-container']" >
    <div class="swiper-wrapper" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { onMounted, watch, ref } from 'vue'
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
  setup (props, { emit }) {
    const el = ref(null)
    let swiper = null
    onMounted(() => {
      import('swiper/dist/css/swiper.min.css')
      import('swiper').then(Swiper => {
        let options = Object.assign({
          initialSlide: props.active,
          direction: props.direction,
          autoplay: props.autoplay,
          loop: props.loop,
          autoplayDisableOnInteraction: false,
          onSlideChangeStart: (swiper) => {
            emit('update:modelValue', swiper.activeIndex)
            emit('change', swiper.activeIndex)
          }
        }, props.options)
        swiper = new Swiper(el.value, options)
      })
    })
    watch(() => props.active, val => {
      swiper.activeIndex !== val && swiper.slideTo(val)
    })
    return {
      el,
      getSwiper () {
        return swiper
      }
    }
  }
}
</script>
