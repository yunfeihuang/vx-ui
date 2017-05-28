<template>
  <div :class="classes" onselectstart="return false;">
    <div
      :class="cssPrefix + 'picker'"
      @touchstart="touchStartHandler"
      @touchmove="touchMoveHandler"
      @touchend="touchEndHandler"
      @scroll="scrollHandlder"
      >
      <div :class="cssPrefix + 'picker-scroller'">
        <div v-if="placeholder" :class="[cssPrefix + 'picker-item',cssPrefix + 'picker-placeholder']">
          {{placeholder}}
        </div>
        <div
          v-for="(item, index) in options"
          :class="[cssPrefix + 'picker-item', item.value === value ? cssPrefix + 'picker-active' : '']"
          :data-value="item.value"
          :data-index="index"
          v-html="item.label"
          >
        </div>
      </div>
    </div>
    <div :class="cssPrefix + 'picker-indicator'"></div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'

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
  computed: {
    classes () {
      return [cssPrefix + 'picker-wrapper']
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
  mounted () {
    this.scrollElement = this.$el.querySelector('.' + cssPrefix + 'picker')
    requestAnimationFrame(this.scrollToActive)
  },
  methods: {
    scrollToActive () {
      let node = this.$el.querySelector('.' + cssPrefix + 'picker-active')
      let index = 0
      Array.from(this.$el.querySelectorAll('.' + cssPrefix + 'picker-item')).forEach((item, i) => {
        if (item === node) {
          index = i
        }
      })
      requestAnimationFrame(() => {
        this.scrollElement.scrollTop = node ? index * (node.offsetHeight || 42) : 0
      })
    },
    touchEndHandler () {
      this.scrollEnd = true
      this.computedScrollTop()
      this.maxScrollTop = this.scrollElement.scrollHeight - this.scrollElement.offsetHeight
    },
    touchMoveHandler (e) {
      let pageY = e.changedTouches[0].pageY
      if (this.pageY) {
        if (this.scrollElement.scrollTop === 0 && pageY - this.pageY > 0) {
          e.preventDefault()
          e.stopPropagation()
        }
        if (this.scrollElement.scrollTop === this.maxScrollTop && pageY - this.pageY < 0) {
          e.preventDefault()
          e.stopPropagation()
        }
      }
      this.pageY = pageY
    },
    touchStartHandler () {
      this.scrollEnd = false
      this.timer && clearTimeout(this.timer)
    },
    scrollHandlder () {
      if (this.scrollEnd) {
        this.computedScrollTop()
      }
    },
    computedScrollTop () {
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.scrollEnd = false
        let node = this.$el.querySelector('.' + cssPrefix + 'picker')
        let _scrollTop = node.scrollTop
        let index = Math.round(_scrollTop / 42)
        let scrollTop = index * 42
        requestAnimationFrame(() => {
          if (_scrollTop !== scrollTop) {
            easeout(_scrollTop, scrollTop, 4, (value) => {
              node.scrollTop = value
            })
          }
          let active = this.$el.querySelectorAll('.' + cssPrefix + 'picker-item')[index]
          if (active) {
            let value = active.dataset.value
            this.$emit('on-change', value)
            this.$emit('input', value)
          }
        })
      }, 51)
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &picker{
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      overflow-scrolling: touch;
      height:294px;
      &::-webkit-scrollbar{
        display:none;
      }
      &-wrapper{
        position:relative;
        background:#fff;
        text-align: center;
        overflow:hidden;
      }
      &-scroller{
        padding:126px 0;
      }
      &-item{
        line-height:42px;
        overflow: hidden;
        white-space: nowrap;
        padding: 0px 0.5rem;
      }
      &-active{
        // color:$primary-color;
      }
      &-indicator{
        &:before{
          @include divider
          top:126px;
          box-shadow: 0px -63px 0px 63px rgba(255, 255, 255, 0.4), 0px -64px 0px 21px rgba(255, 255, 255, 0.3), 0px -106px 0px 21px rgba(255, 255, 255, 0.45);
        }
        &:after{
          @include divider
          top:168px;
          box-shadow: 0px 63px 0px 63px rgba(255,255,255,0.4), 0px 64px 0px 21px rgba(255, 255, 255, 0.3), 0px 106px 0px 21px rgba(255, 255, 255, 0.45);
        }
      }
      &-placeholder{
        opacity:0.8;
      }
    }
  }
</style>
