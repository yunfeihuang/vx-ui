<template>
  <div :class="classes">
    <div :class="[cssPrefix + 'flow-inner']">
      <div :class="[cssPrefix + 'flow-refresh']">
        <icon></icon>
        <spinner :class="[cssPrefix + 'flow-spinner']"/>
        <span :data-loading="loadingText" :data-pulldown="pullDownText" :data-refresh="refreshText"></span>
      </div>
      <slot></slot>
      <div :class="[cssPrefix + 'flow-loading']" v-if="!end">
        <spinner v-show="loading" :class="[cssPrefix + 'flow-spinner']"/>
        {{loadingText}}
      </div>
      <div :class="[cssPrefix + 'flow-loading']" v-if="end">{{endText}}</div>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import Spinner from '../spinner'
import Icon from '../icon'
export default {
  name: 'ListView',
  components: {
    Spinner,
    Icon
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
    this.$height = this.$el.offsetHeight
    this.$touch = {
      inner: this.$el.querySelector('.' + cssPrefix + 'flow-inner')
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
      if (this.$el.scrollHeight - this.$height - this.$el.scrollTop <= 1) {
        this.$emit('on-pullup', e)
      }
    },
    touchStartHandler (e) {
      if (!this.loading) {
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
