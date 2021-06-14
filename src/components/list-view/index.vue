<template>
  <div class="vx-list-view"
    @scroll="handleScroll($event)"
    @touchstart="handleTouchStart($event)"
    @touchmove="handleTouchMove($event)"
    @touchend="handleTouchEnd($event)"
    @mousedown="handleTouchStart($event)"
    @mousemove="handleTouchMove($event)"
    @mouseup="handleTouchEnd($event)">
    <div class="vx-list-view--inner">
      <div class="vx-list-view--refresh">
        <i class="vx-list-view--icon"></i>
        <vx-spinner class="vx-list-view--spinner"/>
        <span :data-loading="loadingText" :data-pulldown="pullDownText" :data-refresh="refreshText"></span>
      </div>
      <slot></slot>
      <div class="vx-list-view--loading" v-if="(end===false && $slots.default && $slots.default.length) || loading">
        <vx-spinner class="vx-list-view--spinner"/>
        {{loadingText}}
      </div>
      <div class="vx-list-view--loading is-end" v-if="end" @click.stop="handleGoTop">{{endText}}</div>
    </div>
  </div>
</template>

<script>
import VxSpinner from '../spinner'
export default {
  name: 'VxListView',
  components: {
    VxSpinner
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
      default: '已到底部,点击回到顶部'
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
    this.$$touch = {
      inner: this.$el.querySelector('.vx-list-view--inner')
    }
  },
  beforeUnmount () {
    this.$$touch = null
    this.$$timer && clearTimeout(this.$$timer)
  },
  methods: {
    handleScroll (e) {
      this.$$timer && clearTimeout(this.$$timer)
      this.$$timer = setTimeout(() => {
        !this.loading && this.end === false && this.handlePullup(e)
      }, 200)
    },
    handlePulldown () {
      this.$emit('pulldown')
    },
    handlePullup (e) {
      let loadingNode = this.$el.querySelector('.vx-list-view--loading')
      if (this.$attrs['onPullup'] && loadingNode && this.$el.scrollHeight - this.$el.offsetHeight - this.$el.scrollTop <= loadingNode.offsetHeight) {
        this.$emit('pullup', e)
      }
    },
    getPosition (e) {
      if (document.body.ontouchstart !== undefined) {
        if (e.changedTouches) {
          return {
            pageY: e.changedTouches[0].pageY,
            pageX: e.changedTouches[0].pageX
          }
        } else {
          return {}
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
      if (this.$attrs['onPulldown'] && !this.loading) {
        if (!this.$$touch.pageY && this.$el.scrollTop === 0) {
          let {pageX, pageY} = this.getPosition(e)
          this.$$touch.pageY = pageY
          this.$$touch.pageX = pageX
          this.$$touch.markHeight = this.$el.querySelector('.vx-list-view--refresh').offsetHeight
        }
      }
    },
    handleTouchMove (e) {
      if (this.$attrs['onPulldown']) {
        let {pageY, pageX} = this.getPosition(e)
        if (pageX !== undefined && this.$$touch.pageY && this.$$touch.pageY < pageY && Math.abs(pageY - this.$$touch.pageY) > Math.abs(pageX - this.$$touch.pageX)) {
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
      }
    },
    handleTouchEnd (e) {
      if (this.$attrs['onPulldown']) {
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
      }
    },
    handleGoTop () {
      this.$el.scrollTop = 0
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
