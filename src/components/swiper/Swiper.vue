<template>
  <div :class="['vx-swiper', 'swiper-container']" ref="el">
    <div class="swiper-wrapper" >
      <slot></slot>
    </div>
    <div v-if="pagination" class="swiper-pagination"></div>
    <div v-if="prev" class="swiper-button-prev"></div>
    <div v-if="next" class="swiper-button-next"></div>
    <div v-if="scrollbar" class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
export default {
  name: 'VxSwiper',
  props: {
    active: {
      type: Number,
      default: 0
    },
    autoplay: {
      type: Number,
      default: 2000
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
  setup (props, { emit }) {
    let el = ref(null)
    let swiper = null
    onMounted(() => {
      import('swiper/dist/css/swiper.min.css')
      import('swiper').then(res => {
        let options = Object.assign({
          initialSlide: props.active,
          autoplayDisableOnInteraction: false,
          autoplay: props.autoplay,
          onSlideChangeStart: (swiper) => {
            emit('update:active', swiper.activeIndex)
          }
        }, props.options)
        if (props.pagination) {
          options.pagination = '.swiper-pagination'
        }
        if (props.prev) {
          options.prev = '.swiper-button-prev'
        }
        if (props.next) {
          options.nextButton = '.swiper-button-prev'
        }
        if (props.scrollbar) {
          options.scrollbar = '.swiper-scrollbar'
        }
        swiper = new res.default(el.value, options)
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
