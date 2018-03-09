<template>
  <div :class="$cssPrefix+'carousel'" :style="styles">
    <div :class="$cssPrefix+'carousel-inner ' + innerClass" :style="innerStyle" @mouseenter="handleMouseEnter(-1)" @mouseleave="handleMouseLeave">
       <div :class="$cssPrefix+'carousel-items'">
        <slot></slot>
       </div>
       <div :class="$cssPrefix+'carousel-nav'">
          <span
            v-for="(item, index) in length"
            type="button"
            :key="index"
            :class="index==activeIndex?'active':''"
             @mouseenter="handleMouseEnter(index)"
            >
          </span>
       </div>
    </div>
  </div>
</template>
<script>
export default {
  componentName: 'Carousel',
  props: {
    duration: {
      type: Number,
      default: 3000
    },
    colors: { // 大背景颜色
      type: Array
    },
    innerStyle: {},
    innerClass: {},
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    styles () {
      if (this.colors && this.colors[this.activeIndex]) {
        return {
          backgroundColor: this.colors[this.activeIndex]
        }
      }
      return {}
    }
  },
  watch: {
    activeIndex (value) {
      this.$emit('change', value)
    }
  },
  data () {
    return {
      carouselMounted: false, // slot要用到
      activeIndex: 0,
      length: 0
    }
  },
  mounted () {
    this.init()
  },
  updated () {
    this.init()
  },
  methods: {
    init () {
      this.carouselMounted = true
      this.length = this.$children.length
      this.autoplay && this.toInterval()
    },
    handleMouseEnter (index) {
      this.$interval && clearInterval(this.$interval)
      if (index !== -1) {
        this.activeIndex = index
      }
    },
    handleMouseLeave () {
      this.$interval && clearInterval(this.$interval)
      this.toInterval()
    },
    toInterval () {
      clearInterval(this.$interval)
      this.$interval = setInterval(() => {
        if (this.activeIndex === this.length - 1) {
          this.activeIndex = 0
        } else {
          this.activeIndex = this.activeIndex + 1
        }
      }, this.duration)
    },
    isItemActive (item) {
      return this.$children.some((_item, index) => {
        return _item === item && this.activeIndex === index
      })
    },
    isIE9 () {
      return process.browser && navigator.userAgent.indexOf('MSIE 9.0') > -1
    }
  }
}
</script>
