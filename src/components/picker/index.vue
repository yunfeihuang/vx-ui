<template>
  <div :class="classes" onselectstart="return false;">
    <div
      :class="$cssPrefix + 'picker'"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @scroll="scrollHandlder"
      >
      <div :class="$cssPrefix + 'picker-scroller'">
        <div v-if="placeholder" :class="[$cssPrefix + 'picker-item',$cssPrefix + 'picker-placeholder']">
          {{placeholder}}
        </div>
        <div
          v-for="(item, index) in options"
          :class="[$cssPrefix + 'picker-item', item.value === value ? $cssPrefix + 'picker-active' : '']"
          :data-value="item.value"
          :data-index="index"
          v-html="item.label"
          :key="index"
          >
        </div>
      </div>
    </div>
    <div :class="$cssPrefix + 'picker-indicator'"></div>
  </div>
</template>

<script>
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
  componentName: 'Picker',
  computed: {
    classes () {
      return [this.$cssPrefix + 'picker-wrapper']
    }
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
    }
  },
  watch: {
    options (value) {
      requestAnimationFrame(this.scrollToActive)
    }
  },
  created () {
    this.$touch = {}
  },
  mounted () {
    this.$touch.scrollElement = this.$el.querySelector('.' + this.$cssPrefix + 'picker')
    requestAnimationFrame(this.scrollToActive)
  },
  destroyed () {
    this.$touch = null
  },
  methods: {
    scrollToActive () {
      let node = this.$el.querySelector('.' + this.$cssPrefix + 'picker-active')
      let index = 0
      Array.from(this.$el.querySelectorAll('.' + this.$cssPrefix + 'picker-item')).forEach((item, i) => {
        if (item === node) {
          index = i
        }
      })
      requestAnimationFrame(() => {
        this.$touch.scrollElement.scrollTop = node ? index * (node.offsetHeight || 42) : 0
      })
    },
    handleTouchEnd () {
      this.$touch.scrollEnd = true
      this.computedScrollTop()
    },
    handleTouchMove (e) {
      let pageY = e.changedTouches[0].pageY
      if (this.pageY) {
        if (this.$touch.scrollElement.scrollTop === 0 && pageY - this.pageY > 0) {
          this.$pullTimer && clearTimeout(this.$pullTimer)
          this.$pullTimer = setTimeout(() => {
            this.$emit('pulldown')
          }, 500)
          e.preventDefault()
          e.stopPropagation()
        } else if (Math.round(this.$touch.scrollElement.scrollTop) === this.$touch.maxScrollTop && pageY - this.pageY < 0) {
          this.$pullTimer && clearTimeout(this.$pullTimer)
          this.$pullTimer = setTimeout(() => {
            this.$emit('pullup')
          }, 500)
          e.preventDefault()
          e.stopPropagation()
        }
      }
      this.pageY = pageY
    },
    handleTouchStart (e) {
      this.$touch.scrollEnd = false
      this.$touch.maxScrollTop = this.$touch.scrollElement.scrollHeight - this.$touch.scrollElement.offsetHeight
      this.pageY = e.changedTouches[0].pageY
      this.$timer && clearTimeout(this.$timer)
      this.$pullTimer && clearTimeout(this.$pullTimer)
    },
    scrollHandlder () {
      if (this.$touch && this.$touch.scrollEnd) {
        this.computedScrollTop()
      }
    },
    computedScrollTop () {
      this.$timer && clearTimeout(this.$timer)
      this.$timer = setTimeout(() => {
        this.$touch.scrollEnd = false
        let node = this.$el.querySelector('.' + this.$cssPrefix + 'picker')
        let _scrollTop = node.scrollTop
        let index = Math.round(_scrollTop / 42)
        let scrollTop = index * 42
        requestAnimationFrame(() => {
          if (_scrollTop !== scrollTop) {
            easeout(_scrollTop, scrollTop, 4, (value) => {
              node.scrollTop = value
            })
          }
          let active = this.$el.querySelectorAll('.' + this.$cssPrefix + 'picker-item')[index]
          if (active) {
            let value = active.dataset.value
            value !== this.value && this.$emit('input', value, this.index).$emit('change', value, this.index)
          }
        })
      }, 51)
    }
  }
}
</script>
