<template>
  <div :class="classes">
    <div :class="[cssPrefix + 'flow-inner']">
      <div :class="[cssPrefix + 'flow-refresh']">
        <i class="iconfont"></i>
        <spinner :class="[cssPrefix + 'flow-spinner']"/>
        <span :data-loading="loadingText" :data-pulldown="pullDownText" :data-refresh="refreshText"></span>
      </div>
      <slot></slot>
      <div :class="[cssPrefix + 'flow-loading']" v-if="loading">
        <spinner :class="[cssPrefix + 'flow-spinner']"/>
        {{loadingText}}
      </div>
      <div :class="[cssPrefix + 'flow-loading']" v-if="end">{{endText}}</div>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import Spinner from '../spinner'

export default {
  components: {
    Spinner
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '数据加载...'
    },
    pullDownText: {
      type: String,
      default: '下拉刷新'
    },
    refreshText: {
      type: String,
      default: '释放刷新'
    },
    end: {
      type: Boolean,
      default: false
    },
    endText: {
      type: String,
      default: '没有更多'
    }
  },
  watch: {
    loading (val) {
      if (val === false) {
        this.stopLoading()
      }
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'flow', 'scrollbox']
    }
  },
  created () {
    this.$touch = {}
  },
  mounted () {
    let timer = null
    this._events['on-pullup'] && this.$el.addEventListener('scroll', (e) => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        !this.loading && !this.end && this.scrollHandler(e)
      }, 200)
    })
    if (this._events['on-pulldown']) {
      this.$el.addEventListener('touchstart', this.touchStartHandler)
      this.$el.addEventListener('touchmove', this.touchMoveHandler)
      this.$el.addEventListener('touchend', this.touchEndHandler)
    }
  },
  destroyed () {
    this.$touch = null
  },
  methods: {
    pullDownHandler () {
      this.$emit('on-pulldown')
    },
    pullUpHandler () {
      this.$emit('on-pullup')
    },
    scrollHandler (e) {
      if (this.$el.scrollHeight - this.$el.offsetHeight - this.$el.scrollTop <= 1) {
        this.$emit('on-pullup', e)
      }
    },
    touchStartHandler (e) {
      if (!this.loading) {
        if (!this.$touch.inner) {
          this.$touch.inner = this.$el.querySelector('.' + cssPrefix + 'flow-inner')
        }
        if (!this.$touch.pageY && this.$el.scrollTop === 0) {
          this.$touch.pageY = e.changedTouches[0].pageY
          this.$touch.pageX = e.changedTouches[0].pageX
        }
      }
    },
    touchMoveHandler (e) {
      let pageY = e.changedTouches[0].pageY
      let pageX = e.changedTouches[0].pageX
      if (this.$touch.pageY && this.$touch.pageY < pageY && Math.abs(pageY - this.$touch.pageY) > Math.abs(pageX - this.$touch.pageX)) {
        e.preventDefault()
        e.stopPropagation()
        if (this.$touch.inner) {
          let top = pageY - this.$touch.pageY
          top = top > 100 ? 100 : top
          let cssText = '-webkit-will-change:transform;will-change:transform;-webkit-transform:translateY(' + top + 'px);transform:translateY(' + top + 'px);'
          this.$touch.inner.style.cssText = cssText
          if (this.$touch.pageY && pageY - this.$touch.pageY > 60) {
            this.$touch.inner.classList.add('active')
          } else {
            this.$touch.inner.classList.remove('active')
          }
        }
      }
      if (!this.$touch.pageY && this.scrollTop <= 0) {
        this.$touch.pageY = pageY
      } else if (this.scrollTop > 0) {
        this.$touch.pageY = 0
      }
    },
    touchEndHandler (e) {
      let pageY = e.changedTouches[0].pageY
      if (this.$touch.pageY && this.$touch.inner && this.$touch.pageY < pageY) {
        if (pageY - this.$touch.pageY > 60) {
          setTimeout(() => {
            let cssText = '-webkit-transform:translateY(40px);transform:translateY(40px);-webkit-transition:transform 0.5s ease 0s;transition:transform 0.5s ease 0s;'
            this.$touch.inner.style.cssText = cssText
            setTimeout(() => {
              this.$touch.inner.classList.remove('active')
              this.$touch.inner.classList.add('loading')
              this.$emit('on-pulldown', e)
            }, 500)
          }, 600)
        } else {
          let cssText = '-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:transform 0.36s ease 0s;transition:transform 0.36s ease 0s;'
          this.$touch.inner.style.cssText = cssText
          setTimeout(() => {
            this.$touch.inner.classList.remove('active')
            this.$touch.inner.style.cssText = ''
          }, 500)
        }
        if (this.$touch.pageY !== pageY) {
          e.stopPropagation()
          e.preventDefault()
        }
      }
      this.$touch.pageY = 0
    },
    stopLoading () {
      if (this.$touch && this.$touch.inner && this.$touch.inner.className.indexOf('loading') > -1) {
        let cssText = '-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:transform 0.36s ease 0s;transition:transform 0.36s ease 0s;'
        this.$touch.inner.style.cssText = cssText
        this.$touch.inner.classList.remove('loading')
      }
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      touch: {}
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &flow{
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      overflow-scrolling: touch;
      &-inner{
        position: relative;
        padding-top: 5px;
        &.active .#{$css-prefix}flow-refresh span:before{
          content:attr(data-refresh);
        }
        &.active{
          .#{$css-prefix}flow-refresh{
            color:$primary-color;
            span:before{
              content:attr(data-refresh);
            }
            .iconfont{
              transform: rotate(180deg);
              position:relative;
              top:-2px;
            }
          }
        }
        &.loading{
          .#{$css-prefix}flow-refresh{ 
            span:before{
              content:attr(data-loading);
            }
            .iconfont:before{
              display:none
            }
            .#{$css-prefix}flow-spinner{
              display: inline-block
            }
          }
        }
      }
      &-refresh{
        color:$sub-color;
        line-height:46px;
        margin-top:-46px;
        text-align:center;
        .iconfont{
          vertical-align: middle;
          display: inline-block;
          line-height: 100%;
          font-size:18px;
          &:before{
            content:'\e6d5';
          }
        }
        .#{$css-prefix}flow-spinner{
          display: none
        }
        span:before{
          content:attr(data-pulldown)
        }
      }
      &-loading{
        text-align:center;
        line-height:40px;
        color:$sub-color;
      }
      &-spinner{
        margin-right:4px;
      }
    }
  }
</style>
