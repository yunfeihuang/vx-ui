<template>
  <div class="vx-picker--wrapper" onselectstart="return false;">
    <div
      class="vx-picker"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @scroll="handleScroll"
      >
      <div class="vx-picker--scroller">
        <rem-to-px :height="itemHeight" even v-if="placeholder" :class="['vx-picker--item','vx-picker--placeholder']">
          {{placeholder}}
        </rem-to-px>
        <rem-to-px
          v-for="(item, index) in options"
          :height="itemHeight"
          even
          :class="['vx-picker--item',{'is-active' : item.value === value}]"
          :data-value="item.value"
          :data-index="index"
          v-html="item.label"
          :key="index"
          >
        </rem-to-px>
      </div>
    </div>
    <div class="vx-picker--indicator">
      <div class="vx-picker--indicator-top"></div>
      <div class="vx-picker--indicator-bottom"></div>
    </div>
  </div>
</template>

<script>
import RemToPx from '../remtopx'
let easeout = (A, B, rate, callback) => {
  if (A === B || typeof A !== 'number') {
    return
  }
  B = B || 0
  rate = rate || 2
  let step = () => {
    A = A + (B - A) / rate
    if (Math.abs(B - A) < 1) {
      callback(B, true)
      return
    }
    callback(A, false)
    requestAnimationFrame(step)
  }
  step()
}

export default {
  name: 'Picker',
  componentName: 'Picker',
  components: {
    RemToPx
  },
  props: {
    options: {
      type: Array,
      reqiured: true
    },
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: ''
    },
    itemHeight: {
      type: Number,
      default: 0.9
    }
  },
  watch: {
    options (value) {
      requestAnimationFrame(this.scrollToActive)
    }
  },
  created () {
    this.$$touch = {}
  },
  mounted () {
    this.$$touch.scrollElement = this.$el.querySelector('.vx-picker')
    requestAnimationFrame(this.scrollToActive)
    this.$nextTick(this.computeStyles)
    window.addEventListener('resize', this.computeStyles, false)
  },
  beforeDestroy () {
    this.$$touch = null
    this.$$pullTimer && clearTimeout(this.$$pullTimer)
    this.$$timer && clearTimeout(this.$$timer)
    window.removeEventListener('resize', this.computeStyles)
  },
  methods: {
    computeStyles () {
      let fontSize = document.documentElement.style.fontSize
      if (fontSize && this.itemHeight) {
        fontSize = parseInt(fontSize, 10)
        let itemHeight = fontSize * this.itemHeight
        if (itemHeight % 2) {
          itemHeight++
        }
        let pickerNode = this.$el.querySelector('.vx-picker')
        let pickerScrollerNode = this.$el.querySelector('.vx-picker--scroller')
        let indicatorTopNode = this.$el.querySelector('.vx-picker--indicator-top')
        let indicatorBottomNode = this.$el.querySelector('.vx-picker--indicator-bottom')
        requestAnimationFrame(() => {
          pickerNode.style.height = itemHeight * 7 + 'px'
          pickerScrollerNode.style.padding = itemHeight * 3 + 'px 0'
          pickerScrollerNode.style.lineHeight = itemHeight + 'px'
          indicatorTopNode.style.top = itemHeight * 3 + 'px'
          indicatorBottomNode.style.top = itemHeight * 4 + 'px'
          indicatorTopNode.style.boxShadow = `0px -${itemHeight * 3}px 0px ${itemHeight * 3}px rgba(255,255,255,0.45)`
          indicatorBottomNode.style.boxShadow = `0px ${itemHeight * 3}px 0px ${itemHeight * 3}px rgba(255,255,255,0.45)`
          requestAnimationFrame(this.scrollToActive)
        })
      }
    },
    scrollToActive () {
      let node = this.$el.querySelector('.is-active')
      let index = 0
      Array.from(this.$el.querySelectorAll('.vx-picker--item')).forEach((item, i) => {
        if (item === node) {
          index = i
        }
      })
      requestAnimationFrame(() => {
        this.$$touch.scrollElement.scrollTop = node ? index * node.offsetHeight : 0
      })
    },
    handleTouchEnd () {
      this.$$touch.scrollEnd = true
      this.computedScrollTop()
    },
    handleTouchMove (e) {
      let pageY = e.changedTouches[0].pageY
      if (this.$$touch.pageY) {
        if (this.$$touch.scrollElement.scrollTop === 0 && pageY - this.$$touch.pageY > 0) {
          this.$$pullTimer && clearTimeout(this.$$pullTimer)
          this.$$pullTimer = setTimeout(() => {
            this.$emit('pulldown')
          }, 500)
          e.preventDefault()
          e.stopPropagation()
        } else if (Math.round(this.$$touch.scrollElement.scrollTop) === this.$$touch.maxScrollTop && pageY - this.$$touch.pageY < 0) {
          this.$$pullTimer && clearTimeout(this.$$pullTimer)
          this.$$pullTimer = setTimeout(() => {
            this.$emit('pullup')
          }, 500)
          e.preventDefault()
          e.stopPropagation()
        }
      }
      this.$$touch.pageY = pageY
    },
    handleTouchStart (e) {
      this.$$touch.scrollEnd = false
      this.$$touch.maxScrollTop = this.$$touch.scrollElement.scrollHeight - this.$$touch.scrollElement.offsetHeight
      this.$$touch.pageY = e.changedTouches[0].pageY
      this.$$timer && clearTimeout(this.$$timer)
      this.$$pullTimer && clearTimeout(this.$$pullTimer)
      let node = this.$$touch.scrollElement.querySelector('.vx-picker--item')
      if (node) {
        this.$$touch.offsetHeight = node.offsetHeight
      }
    },
    handleScroll () {
      if (document.ontouchstart !== undefined) {
        if (this.$$touch && this.$$touch.scrollEnd) {
          this.computedScrollTop()
        }
      } else {
        if (!this.$$touch.offsetHeight) {
          let node = this.$$touch.scrollElement.querySelector('.vx-picker--item')
          if (node) {
            this.$$touch.offsetHeight = node.offsetHeight
          }
        }
        this.computedScrollTop()
      }
    },
    computedScrollTop () {
      this.$$timer && clearTimeout(this.$$timer)
      this.$$timer = setTimeout(() => {
        this.$$touch.scrollEnd = false
        let node = this.$el.querySelector('.vx-picker')
        let _scrollTop = node.scrollTop
        let index = Math.round(_scrollTop / this.$$touch.offsetHeight)
        let scrollTop = index * this.$$touch.offsetHeight
        requestAnimationFrame(() => {
          if (_scrollTop !== scrollTop) {
            easeout(_scrollTop, scrollTop, 4, (value) => {
              node.scrollTop = value
            })
          }
          let active = this.$el.querySelectorAll('.vx-picker--item')[index]
          if (active) {
            let value = active.dataset.value
            value !== this.value && this.$emit('input', value).$emit('change', value)
          }
        })
      }, 200)
    }
  }
}
</script>
