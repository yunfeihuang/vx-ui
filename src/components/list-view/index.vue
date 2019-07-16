<template>
  <div class="vx-list-view">
    <div class="vx-list-view--inner">
      <div class="vx-list-view--refresh">
        <i class="vx-list-view--icon"></i>
        <spinner class="vx-list-view--spinner"/>
        <span :data-loading="loadingText" :data-pulldown="pullDownText" :data-refresh="refreshText"></span>
      </div>
      <slot></slot>
      <div class="vx-list-view--loading" v-if="(end===false && $slots.default && $slots.default.length) || loading">
        <spinner class="vx-list-view--spinner"/>
        {{loadingText}}
      </div>
      <div class="vx-list-view--loading" v-if="end">{{endText}}</div>
    </div>
  </div>
</template>

<script>
import Spinner from '../spinner'
export default {
  componentName: 'ListView',
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
      type: [Boolean, Number],
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
  mounted () {
    this.$listeners['pullup'] && this.$el.addEventListener('scroll', (e) => {
      this.$$timer && clearTimeout(this.$$timer)
      this.$$timer = setTimeout(() => {
        !this.loading && this.end === false && this.handleScroll(e)
      }, 200)
    })
    if (this.$listeners['pulldown']) {
      if (document.body.ontouchstart !== undefined) {
        this.$el.addEventListener('touchstart', this.handleTouchStart)
        this.$el.addEventListener('touchmove', this.handleTouchMove)
        this.$el.addEventListener('touchend', this.handleTouchEnd)
      } else {
        this.$el.addEventListener('mousedown', this.handleTouchStart)
        this.$el.addEventListener('mousemove', this.handleTouchMove)
        this.$el.addEventListener('mouseup', this.handleTouchEnd)
      }
    }
    this.$$height = this.$el.offsetHeight
    this.$$touch = {
      inner: this.$el.querySelector('.vx-list-view--inner')
    }
  },
  beforeDestroy () {
    this.$$touch = null
    this.$$timer && clearTimeout(this.$$timer)
  },
  methods: {
    handlePulldown () {
      this.$emit('pulldown')
    },
    handlePullup () {
      this.$emit('pullup')
    },
    handleScroll (e) {
      if (this.$el.scrollHeight - this.$$height - this.$el.scrollTop <= 1) {
        this.$emit('pullup', e)
      }
    },
    getPosition (e) {
      if (document.body.ontouchstart !== undefined) {
        return {
          pageY: e.changedTouches[0].pageY,
          pageX: e.changedTouches[0].pageX
        }
      } else {
        return {
          pageY: e.pageY,
          pageX: e.pageX
        }
      }
    },
    innerCss (text) {
      this.$$touch.inner.style.cssText = text
    },
    handleTouchStart (e) {
      if (!this.loading) {
        if (!this.$$touch.pageY && this.$el.scrollTop === 0) {
          let {pageX, pageY} = this.getPosition(e)
          this.$$touch.pageY = pageY
          this.$$touch.pageX = pageX
          this.$$touch.markHeight = this.$el.querySelector('.vx-list-view--refresh').offsetHeight
        }
      }
    },
    handleTouchMove (e) {
      let {pageY, pageX} = this.getPosition(e)
      if (this.$$touch.pageY && this.$$touch.pageY < pageY && Math.abs(pageY - this.$$touch.pageY) > Math.abs(pageX - this.$$touch.pageX)) {
        e.preventDefault()
        e.stopPropagation()
        let top = pageY - this.$$touch.pageY
        let markHeight = this.$$touch.markHeight
        top = top > markHeight * 2 ? markHeight * 2 : top
        let cssText = '-webkit-will-change:transform;will-change:transform;-webkit-transform:translate3d(0,' + top + 'px,0);transform:translate3d(0,' + top + 'px,0);'
        this.innerCss(cssText)
        if (this.$$touch.pageY && pageY - this.$$touch.pageY > (markHeight + 20)) {
          this.$$touch.inner.classList.add('active')
        } else {
          this.$$touch.inner.classList.remove('active')
        }
      }
      if (!this.$$touch.pageY && this.scrollTop <= 0) {
        this.$$touch.pageY = pageY
      } else if (this.scrollTop > 0) {
        this.$$touch.pageY = 0
      }
    },
    handleTouchEnd (e) {
      let {pageY} = this.getPosition(e)
      if (this.$$touch.pageY && this.$$touch.inner && this.$$touch.pageY < pageY) {
        let markHeight = this.$$touch.markHeight
        if (pageY - this.$$touch.pageY > (markHeight + 20)) {
          setTimeout(() => {
            let cssText = `-webkit-transform:translate3d(0,${markHeight}px,0);transform:translate3d(0,${markHeight}px,0);-webkit-transition:transform 0.5s ease 0s;transition:transform 0.5s ease 0s;`
            this.innerCss(cssText)
            setTimeout(() => {
              this.$$touch.inner.classList.remove('active')
              this.$$touch.inner.classList.add('loading')
              this.$emit('pulldown', e)
            }, 500)
          }, 600)
        } else {
          let cssText = `-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:transform 0.36s ease 0s;transition:transform 0.36s ease 0s;`
          this.innerCss(cssText)
          setTimeout(() => {
            this.$$touch.inner.classList.remove('active')
            this.innerCss('')
          }, 500)
        }
        if (this.$$touch.pageY !== pageY) {
          e.stopPropagation()
          e.preventDefault()
        }
      }
      this.$$touch.pageY = 0
    },
    stopLoading () {
      if (this.$$touch && this.$$touch.inner && this.$$touch.inner.className.indexOf('loading') > -1) {
        let cssText = '-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:transform 0.36s ease 0s;transition:transform 0.36s ease 0s;'
        this.innerCss(cssText)
        this.$$touch.inner.classList.remove('loading')
      }
    }
  }
}
</script>
